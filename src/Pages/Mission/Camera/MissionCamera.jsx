import React, { useState, useRef } from 'react';
import { Camera } from 'react-camera-pro';
import './MissionCamera.css';
import { CameraBar, UploadButton, UploadImg } from './CameraBar';

export const MissionCamera = () => {
  const camera = useRef(null);
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const [image, setImage] = useState(null);
  const Certification = { imgUrl: image };

  return (
    <div className="wrap">
      {image ? (
        <UploadImg src={image} />
      ) : (
        <Camera
          ref={camera}
          aspectRatio="cover"
          numberOfCamerasCallback={setNumberOfCameras}
        />
      )}
      {image ? (
        <CameraBar>
          <UploadButton  />
        </CameraBar>
      ) : (
        <div className="control">
          <div className="ImagePreview" image={image} />
          <div
            className="TakePhotoButton"
            onClick={() => {
              if (camera.current) {
                const photo = camera.current.takePhoto();
                setImage(photo);
              }
            }}
          />
          <div
            className="ChangeFacingCameraButton"
            disabled={numberOfCameras <= 1}
            onClick={() => {
              if (camera.current) {
                const result = camera.current.switchCamera();
                console.log(result);
              }
            }}
          />
        </div>
      )}
    </div>
  );
};
export default MissionCamera;

// const ImagePreview = styled.div`
//   width: 120px;
//   height: 120px;
//   ${({ image }) => (image ? `background-image:  url(${image});` : "")}
//   background-size: contain;
//   background-repeat: no-repeat;
//   background-position: center;
// `;
