import React from "react";
import "./UpdateMyPage.css";
import { HiPencil } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";

const UpdateMyPage = () => {
  return (
    <>
      <div className="whole-updatemypage">
        <div className="updatemypage-back-arrow-area">
          <IoIosArrowBack className="updatemypage-back-arrow-icon" />
        </div>
        <div className="updatemypage-body-wrap">
          <div className="updatemypage-image-email-input-wrap">
            <img
              className="updatemypage-profile-image"
              src={
                "https://w.namu.la/s/35cb7bb36a3ca02e4fd73acdd74a03dd5fe1121b3f637db1c4c9683f0309741d40e8e4f1939c7a79aa0c582e5c343169ef8f9250328fa6401aef27b67f32e5abb16958e145e7d6cec295408d5b9141604ddf09a29704e8035024c76629e5d39a192b4efc5068eb225ba46dd9bbcd25a3"
              }
              alt="profile"
            ></img>
            <div className="updatemypage-email">
              <div className="updatemypage-email-text">
                카카오톡 연동 이메일 주소 :
              </div>
              <div className="updatemypage-email-address">
                xxxxxx @gmail.com
              </div>
            </div>
            <div className="updatemypage-input-area">
              <div className="updatemypage-input-1">
                <input
                  className="updatemypage-input-name"
                  placeholder="이름"
                  maxLength={7}
                ></input>
                <HiPencil className="updatemypage-pencil-icon" />
              </div>
              <div className="updatemypage-input-2">
                <input
                  className="updatemypage-input-nickname"
                  placeholder="닉네임"
                  maxLength={7}
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
