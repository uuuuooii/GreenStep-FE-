//react import
import React, { useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Camera } from 'react-camera-pro';
//modules import
import instance from '../../../Redux/modules/instance';
//styled import
import './MissionCamera.css';
import { UploadButton, UploadImg } from './CameraBar';
import CameraButton from '../../../static/components/camera/CameraButton';
import BackCamera from '../../../static/components/camera/BackCamera';
import ChangeCamera from '../../../static/components/camera/ChangeCamera';
import BackArrow from '../../../static/components/camera/BackArrow';

export const MissionCamera = () => {
  const camera = useRef(null);
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const [image, setImage] = useState(null);
  const Certification = { base64String: image };
  const missionId = useParams().id;
  const navigate = useNavigate();
  const Upload = () => {
    instance.post(`/missions/${missionId}`, Certification);
    navigate(`/mission`);
  };
  console.log(image);
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
        <div className="align-center" onClick={() => setImage('')}>
          {image?<BackCamera /> : <BackArrow/>}
        </div>
        {image ? (
          <UploadButton onClick={Upload}>인증샷 보내기</UploadButton>
        ) : (
          <div
            className="center-icon"
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
