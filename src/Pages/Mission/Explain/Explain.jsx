import React from "react";
import "./Explain.css";
import { FiCamera } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const Explain = () => {
  const params = useParams();
  const select = useSelector((state) => console.log(state.mission.challenge));
  console.log(params.id);
  return (
    <>
      <div className="detail-wrap-shape">
        <div className="mission-name-and-tag-area">
          <div className="mission-name-text">Mission Name</div>
          <div className="mission-tag-text">#Mission Tag</div>
          <p className="explain-mission-contents-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consectetur diam placerat elementum sed.
          </p>
        </div>

        <div className="mission-image-area"></div>
        <button className="button-go-camera">
          <div className="button-go-camera-icon">
            <FiCamera />
          </div>
        </button>
      </div>
    </>
  );
};

export default Explain;
