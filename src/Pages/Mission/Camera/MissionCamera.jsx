//react import
import React, { useState, useRef } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
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

 const MissionCamera = () => {
  
  const missionInfo = useParams().id
  const missionId = useParams().id.split('&')[0];
  const camera = useRef(null);
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const [image, setImage] = useState(null);
  const Certification = { base64String: image };

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
            onClick={() => {
              instance.post(`/missions/${missionId}`, Certification);
              navigate(`/explainwating/${missionInfo}`);
            }}
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
