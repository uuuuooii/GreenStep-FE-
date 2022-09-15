//react import
import React, { useState, useRef,useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Camera } from 'react-camera-pro';
//modules import
import instance from '../../../Redux/modules/instance';
//styled import
import './MissionCamera.css';
import { UploadImg } from './CameraBar';
import CameraButton from '../../../static/components/camera/CameraButton';
import BackCamera from '../../../static/components/camera/BackCamera';
import ChangeCamera from '../../../static/components/camera/ChangeCamera';
import BackArrow from '../../../static/components/camera/BackArrow';
import SendButton from '../../../static/components/camera/SendButton';
import {
  __GetTodaymission,
  __GetDailymission,
  __GetWeeklymission,
} from '../../../Redux/modules/mission';
const MissionCamera = () => {
  const dispatch = useDispatch()
  const missionInfo = useParams().id;
  const camera = useRef(null);
  const [loading,setLoading] = useState(false)
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const [image, setImage] = useState(null);
  const Certification = { base64String: image };
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
    if(!select.status==="DEFAULT"){
      alert('이미 전송한 미션입니다.');
      navigate('/mission')
    }else{
    instance.post(`/missions/${paramsNum}`, Certification);
    navigate(`/explainwating/${missionInfo}`);}
  };
  useEffect(() => {
    setLoading(true);
    paramsCategory === 'challenge'
      ? dispatch(__GetTodaymission())
      : paramsCategory === 'daily'
      ? dispatch(__GetDailymission())
      : dispatch(__GetWeeklymission());
    setLoading(false);
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
          <div
            className="center-icon"
            onClick={() => UploadPhoto()}
          >
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
            <CameraButton />
          </div>
        )}
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
      </div>
    </div>
  );
};
export default MissionCamera;
