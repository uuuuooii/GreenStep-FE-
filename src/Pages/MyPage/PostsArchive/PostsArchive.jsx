import React from "react";
import "./PostsArchive.css";
import { IoIosArrowBack } from "react-icons/io";
import { FiSettings } from "react-icons/fi";

const PostsArchive = () => {
  return (
    <>
      <div className="wrap-archive">
        <div className="back-and-settings-button-area">
          <div className="back-button">
            <IoIosArrowBack />
          </div>
          <div className="settings-button">
            <FiSettings />
          </div>
        </div>
        <div className="archive-grid-area">
          <div className="archive-image-div"></div>
          <div className="archive-image-div"></div>
          <div className="archive-image-div"></div>
          <div className="archive-image-div"></div>
          <div className="archive-image-div"></div>
          <div className="archive-image-div"></div>
          <div className="archive-image-div"></div>
          <div className="archive-image-div"></div>
          <div className="archive-image-div"></div>
          <div className="archive-image-div"></div>
          <div className="archive-image-div"></div>
        </div>
      </div>
    </>
  );
};

export default PostsArchive;
