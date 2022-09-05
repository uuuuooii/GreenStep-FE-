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
  // const []
  const param = useParams().id;
  const [loading, setLoding] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.userInfo.certification);
  console.log(data);
  useEffect(() => {
    setLoding(true);
    dispatch(getCertThunk());
    setLoding(false);
  }, []);
  return (
    <>
      <div className="detail-wrap-shape">
        <div className="mission-name-and-tag-area">
          <div className="mission-name-text">title</div>
          <div className="mission-tag-text">#Mission Tag</div>
        </div>
        <div className="mission-image-area"></div>
        <textarea className="upload-contents-input"></textarea>
        <button className="button-share" onClick={() => navigate("/feed")}>
          피드에 올리기
        </button>
      </div>
    </>
  );
};

export default Upload;
