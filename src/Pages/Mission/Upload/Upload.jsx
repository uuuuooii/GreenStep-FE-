import { useNavigate } from "react-router-dom";
import React from "react";
import "./Upload.css";

const Upload = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="detail-wrap-shape">
        <div className="mission-name-and-tag-area">
          <div className="mission-name-text">Mission Name</div>
          <div className="mission-tag-text">#Mission Tag</div>
        </div>
        <div className="mission-image-area"></div>
        <div className="mission-contents-box">
          <p className="mission-contents-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            pellentesque aliquet nisl nisl, amet, quis. Elementum feugiat
            maecenas nunc vestibulum dictumst.
          </p>
        </div>
        <button className="button-share" onClick={() => navigate("/feed")}>
          피드에 올리기
        </button>
      </div>
    </>
  );
};

export default Upload;
