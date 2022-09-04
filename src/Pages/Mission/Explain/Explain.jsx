//react import
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//styled import
import "./Explain.css";
import { FiCamera } from "react-icons/fi";
import {
  __GetTodaymission,
  __GetDailymission,
} from "../../../Redux/modules/mission";
const Explain = () => {
  const [loding, setLoding] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const paramsNum = useParams().id.split("&")[0];
  const paramsCategory = useParams().id.split("&")[1];
  const select = useSelector((state) =>
    paramsCategory === "challenge"
      ? state.mission.challenge[0]
      : paramsCategory === "daily"
      ? state.mission.daily.filter((item) => item.missionId == paramsNum)[0]
      : state.mission.weekly.filter((item) => item.missionId == paramsNum)[0]
  );
  useEffect(() => {
    setLoding(true);
    dispatch(__GetTodaymission());
    dispatch(__GetDailymission());
    setLoding(false);
  }, [dispatch]);
  return (
    <>
      {!loding ? (
        <div className="detail-wrap-shape">
          <div className="mission-name-and-tag-area">
            <div className="mission-name-text">
              {select ? select.missionName : "MissionName"}
            </div>
            <div className="mission-tag-text">#Mission Tag</div>
            <p className="explain-mission-contents-text">
              {select ? select.missionContent : "내용이 들어갑니다"}
            </p>
          </div>

          <img
            className="mission-image-area"
            src={
              select
                ? select.missionImageUrl
                : "https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-gray-solid-color-simple-background-image_557028.jpg"
            }
          />
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
