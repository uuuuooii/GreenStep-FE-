//react import
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiCamera } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//styled import
import "./Explain.css";
//modules import
import {
  __GetTodaymission,
  __GetDailymission,
} from "../../../Redux/modules/mission";

const Explain = () => {
  const loaded = useSelector((state) => state.mission.loaded);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const paramsNum = useParams().id.split("&")[0];
  const paramsCategory = useParams().id.split("&")[1];
  const select = useSelector((state) =>
    paramsCategory === "challenge"
      ? state.mission.challenge[0]
      : paramsCategory === "daily"
      ? state.mission.daily
      : state.mission.weekly
  );
  useEffect(() => {
    dispatch(__GetTodaymission());
    dispatch(__GetDailymission());
  }, [dispatch]);

  return (
    <>
      {loaded ? (
        <div className="detail-wrap-shape">
          <div className="mission-name-and-tag-area">
            <div className="mission-name-text">{select.missionName}</div>
            <div className="mission-tag-text">#Mission Tag</div>
            <p className="explain-mission-contents-text">
              {select.missionContent}
            </p>
          </div>

          <img className="mission-image-area" src={select.missionImageUrl} />
          <button className="button-go-camera">
            <div className="button-go-camera-icon">
              <FiCamera
                onClick={() => navigate(`/missioncamera/${paramsNum}`)}
              />
            </div>
          </button>
        </div>
      ) : (
        <div>loading</div>
      )}
    </>
  );
};

export default Explain;
