import React from "react";
import "./DetailPhotoShots.css";

const DetailPhotoShots = () => {
  return (
    <>
      <div className="detail-wrap-shape">
        <div className="mission-name-and-tag-area">
          <div className="mission-name-text">Mission Name</div>
          <div className="mission-tag-text">#Mission Tag</div>
        </div>
        <div className="mission-image-area"></div>
        <button className="button-share">공유하기</button>
      </div>
    </>
  );
};

export default DetailPhotoShots;
