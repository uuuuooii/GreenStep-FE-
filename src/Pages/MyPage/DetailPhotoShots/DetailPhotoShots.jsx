import React from "react";
import "./DetailPhotoShots.css";

const DetailPhotoShots = () => {
  return (
    <>
      <div className="detail-photoshots-wrap-shape">
        <div className="detail-photoshots-mission-name-and-tag-area">
          <div className="detail-photoshots-mission-name-text">
            Mission Name
          </div>
          <div className="detail-photoshots-mission-tag-text">#Mission Tag</div>
        </div>
        <div className="detail-photoshots-mission-image-area"></div>
        <button className="detail-photoshots-button-share">공유하기</button>
      </div>
    </>
  );
};

export default DetailPhotoShots;
