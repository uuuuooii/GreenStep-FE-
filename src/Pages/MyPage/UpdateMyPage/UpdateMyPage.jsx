//react import
import React, { useEffect, useState } from "react";
import useInput from "../../../../src/hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import instance from "../../../Redux/modules/instance";
//modules import
import { getUserInfoThunk } from "../../../Redux/modules/userInfoSlice";
//styled import
import "./UpdateMyPage.css";
import { HiPencil } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";

const URL = process.env.REACT_APP_URL;

const UpdateMyPage = ({Header}) => {
  const [acceptMail, setAcceptMail] = useState(false);
  const [name, nameHandler] = useInput("");
  const [nickname, nicknameHandler] = useInput("");
  const userinfo = {
    name: name,
    nickname: nickname,
    profilePhoto: userInfo.profilePhoto,
    acceptMail: acceptMail,
  };
  const [loading, setLoding] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo.userInfo);

  useEffect(() => {
    setLoding(true);
    dispatch(getUserInfoThunk());
    setLoding(false);
  }, []);

  return (
    <>
    {Header}
      <div className="whole-updatemypage">
        <div className="updatemypage-back-arrow-area">
          <IoIosArrowBack className="updatemypage-back-arrow-icon" />
        </div>
        <div className="updatemypage-body-wrap">
          <div className="updatemypage-image-email-input-wrap">
            <img
              className="updatemypage-profile-image"
              src={userInfo.profilePhoto}
              alt="profile"
            ></img>
            <div className="updatemypage-email">
              <div className="updatemypage-email-text">
                카카오톡 연동 이메일 주소 :
              </div>
              <div className="updatemypage-email-address">{userInfo.email}</div>
            </div>
            <div className="updatemypage-input-area">
              <div className="updatemypage-input-1">
                <input
                  className="updatemypage-input-name"
                  onChange={nameHandler}
                  value={name}
                  placeholder="이름"
                  maxLength={8}
                ></input>
                <HiPencil className="updatemypage-pencil-icon" />
              </div>
              <div className="updatemypage-input-2">
                <input
                  className="updatemypage-input-nickname"
                  onChange={nicknameHandler}
                  value={nickname}
                  placeholder="닉네임"
                  maxLength={8}
                ></input>
                <HiPencil className="updatemypage-pencil-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateMyPage;
