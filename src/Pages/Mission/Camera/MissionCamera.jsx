//react import
import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Camera } from 'react-camera-pro';
//modules import
import instance from '../../../Redux/modules/instance';
//styled import
import './MissionCamera.css';
import { UploadImg } from './CameraBar';
import { FiCamera } from 'react-icons/fi';
import BackCamera from '../../../static/components/camera/BackCamera';
import ChangeCamera from '../../../static/components/camera/ChangeCamera';
import BackArrow from '../../../static/components/camera/BackArrow';
import SendButton from '../../../static/components/camera/SendButton';
import {
  __GetTodaymission,
  __GetDailymission,
  __GetWeeklymission,
} from '../../../Redux/modules/mission';
const MissionCamera = ({ onClickToast }) => {
  const dispatch = useDispatch();
  // 미션정보
  const missionInfo = useParams().id;
  // 카메라 스테이터스
  const camera = useRef(null);
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  // 이미지값
  const [image, setImage] = useState(null);
  const Certification = { base64String: image };
  // 미션 번호 & 미션 분류
  const paramsNum = useParams().id.split('&')[0];
  const paramsCategory = useParams().id.split('&')[1];
  const select = useSelector((state) =>
    paramsCategory === 'challenge'
      ? state.mission.challenge[0]
      : paramsCategory === 'daily'
      ? state.mission.daily.filter((item) => item.missionId == paramsNum)[0]
      : state.mission.weekly.filter((item) => item.missionId == paramsNum)[0]
  );
  const UploadPhoto = () => {
    if (!select.status === 'DEFAULT') {
      onClickToast('이미 등록한 게시물입니다.');
      navigate('/mission');
    } else {
      instance.post(`/missions/${paramsNum}`, Certification);
      navigate(`/explainwaiting/${missionInfo}`);
    }
  };
  // 미션 찾아오기
  useEffect(() => {
    paramsCategory === 'challenge'
      ? dispatch(__GetTodaymission())
      : paramsCategory === 'daily'
      ? dispatch(__GetDailymission())
      : dispatch(__GetWeeklymission());
  }, [dispatch]);

  const navigate = useNavigate();
  return (
    <div className="wrap">
      {image ? (
        <div className="align-center">
          {' '}
          <UploadImg src={image} />
        </div>
      ) : (
        <>
          <div className="align-center">
            <div className="camera">
              <Camera
                ref={camera}
                aspectRatio={14 / 14}
                numberOfCamerasCallback={setNumberOfCameras}
                facingMode={'environment'}
              />
            </div>
          </div>
        </>
      )}

      <div className="control">
        {image ? (
          <div className="align-center-left" onClick={() => setImage('')}>
            <BackCamera />
          </div>
        ) : (
          <div className="align-center" onClick={() => navigate(-1)}>
            <BackArrow />
          </div>
        )}
        {image ? (
          <div className="center-icon" onClick={() => UploadPhoto()}>
            <SendButton />
          </div>
        ) : (
          <div
            className="center-icon-send"
            onClick={() => {
              if (camera.current) {
                const photo = camera.current.takePhoto();
                setImage(photo);
              }
            }}
          >
            {' '}
            <div className="missioncamera-icon-button">
              <FiCamera className="missioncamera-icon" />
            </div>
          </div>
        )}

        {image ? null : (
          <div
            className="align-center"
            onClick={() => {
              if (camera.current) {
                const result = camera.current.switchCamera();
              }
            }}
          >
            <ChangeCamera disabled={numberOfCameras <= 1} />
          </div>
        )}
      </div>
    </div>
  );
};
export default MissionCamera;
