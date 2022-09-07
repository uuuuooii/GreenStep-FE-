//react import
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useInput from "../../../hooks/useInput";
//modules import
import instance from "../../../Redux/modules/instance";
import { getCertThunk } from "../../../Redux/modules/userInfoSlice";
//styled import
import "./Upload.css";

const Upload = ({}) => {
  const [content, contentHandler] = useInput("");
  const param = useParams().id;
  const [loading, setLoding] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) =>
    state.userInfo.certification.length > 1
      ? state.userInfo.certification.filter((item) => item.id == param)[0]
      : state.userInfo.certification[0]
  );
  const testText = { content: content };
  const Upload = () => {
    instance.post(`/profiles/missions/${param}`, testText);
    navigate("/mypage");
  };

  useEffect(() => {
    setLoding(true);
    dispatch(getCertThunk());
    setLoding(false);
  }, []);
  return (
    <>
      {!loading ? (
        <div className="upload-wrap-shape">
          <div className="upload-mission-name-and-tag-area">
            <div className="upload-mission-name-text">{data.missionName}</div>
            <div className="upload-mission-tag-text">{data.tag}</div>
          </div>
          <img
            className="upload-mission-image-area"
            src={data.missionImgUrl}
          ></img>
          <textarea
            className="upload-contents-input"
            onChange={contentHandler}
            maxLength={140}
          ></textarea>
          <button
            className="upload-button-share"
            onClick={() =>
              data.onFeed ? alert("이미 작성하신 게시물입니다.") : Upload()
            }
          >
            피드에 올리기
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Upload;
