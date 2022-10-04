import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import "./Notice.css";

const Notice = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="notice-back-arrow-area"
        onClick={() => navigate("/mission")}
      >
        <IoIosArrowBack className="notice-back-arrow-icon" />
        <div className="notice-title-text">공지사항</div>
        <div className="notice-dummy-div"></div>
      </div>
      <div className="notice-content">
        안녕하세요, 그린스텝입니다.
        <br />
        <br />
        먼저 저희 그린스텝을 찾아주시는 여러분들께 감사의 인사 드리며, 저희 앱
        미션인 챌린지 미션/ 데일리 미션/ 위클리 미션을 이용해 주신 여러분들께
        안내 말씀드립니다.
        <br />
        <br />
        서버 문제로 인해 사진 데이터가 초기화 되었음을 안내 드립니다.
        <br />
        최선을 다해 복구 방법을 알아보았으나, 현재는 복구가 어려운 상태입니다.
        <br />
        <br />
        이에 죄송한 마음을 담아 현재 걸음 수의 2배를 지급 드렸습니다.
        <br />
        지급된 걸음 수는 마이페이지에서 확인이 가능합니다.
        <br />
        <br />
        사용에 불편을 드린 점 다시 한번 사과드리며, 이번 일을 자성의 기회로 삼아
        더욱 발전하는 그린스텝이 되겠습니다.
        <br />
        <br />
        이용에 불편을 드려 대단히 죄송합니다.
        <br />
        감사합니다.
        <br />
        <br />
        그린스텝 드림.{" "}
      </div>
    </>
  );
};

export default Notice;
