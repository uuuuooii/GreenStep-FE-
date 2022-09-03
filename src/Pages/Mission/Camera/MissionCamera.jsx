//react import
import React, { useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Camera } from "react-camera-pro";
import "./MissionCamera.css";
import { CameraBar, UploadButton, UploadImg } from "./CameraBar";
//modules import
import instance from "../../../Redux/modules/instance";

export const MissionCamera = () => {
  const camera = useRef(null);
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const [image, setImage] = useState(null);
  const Certification = { imgUrl: image };
  const URL = process.env.REACT_APP_URL;
  const missionId = useParams();
  const navigate = useNavigate();
  const Upload = () => {
    instance.post(`${URL}/missions/1?photo=${image}`);
    navigate("/Upload");
  };

console.log(image)
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
          <UploadButton onClick={Upload} />
        </CameraBar>
      ) : (
        <div className="control">
          <div className="ImagePreview" image={image} />
          <div
            className="TakePhotoButton"
            onClick={() => {
              if (camera.current) {
                const photo = camera.current.takePhoto()
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
