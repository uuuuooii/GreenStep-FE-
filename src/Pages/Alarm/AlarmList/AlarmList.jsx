import React from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../../Redux/modules/instance";

import "./AlarmList.css";
import { IoIosArrowBack } from "react-icons/io";

const AlarmList = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="alarmlist-back-arrow-area">
        <IoIosArrowBack
          className="alarmlist-back-arrow-icon"
          onClick={() => navigate(-1)}
        />
        <div className="alarmlist-title-text">알림</div>
        <div className="alarmlist-dummy-place"></div>
      </div>
      <div className="alarmlist-dummy-div"></div>
      <div className="alarmlist-box">
        <div className="alarmlist-contents-and-time">
          <div className="alarmlist-box-contents">
            [미션 제목] 미션 인증이 완료되었습니다. 지금 바로 피드에
            공유해보세요!
          </div>
          <div className="alarmlist-box-time">9월 17일 02:10</div>
        </div>
        <div className="alarmlist-box-img-area">
          <div className="alarmlist-box-img"></div>
        </div>
      </div>
    </>
  );
};

export default AlarmList;
