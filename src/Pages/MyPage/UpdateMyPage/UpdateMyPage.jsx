//react import
import React, { useEffect, useState } from "react";
import useInput from "../../../../src/hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import instance from "../../../Redux/modules/instance";
//modules import
import { getUserInfoThunk } from "../../../Redux/modules/userInfoSlice";
//component import
import Toggle from "../../../Components/Toggle/Toggle";
import { SelectImg } from "../../Login/Modal/SecondModal/SecondModalStyled";
//styled import
import { FadeOn } from "../../../Components/Animation/Animation";
import styled from "styled-components";
import "./UpdateMyPage.css";
import "../../../Components/Toast/Toast.css";
import { SlideBottom } from "../../../Components/Animation/Animation";
import { HiPencil } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";
import ViewMoreRowBar from "../../../static/components/ViewMoreRowBar";
import ProfilePencil from "../../../static/components/ProfilePencil";
import { FiCheck } from "react-icons/fi";

export const MyPageImgDiv = styled.div`
  width: 110px;
  height: 110px;
  margin: 12px 15px;
`;

const UpdateMyPageModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  border-radius: 20px 20px 0px 0px;
  z-index: 20;
  background-color: #f8f8f8;
  animation-name: ${SlideBottom};
  animation-duration: 0.4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;

const UpdateMyPageDiv = styled.div`
  width: 100%;
  animation-name: ${FadeOn};
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;

const URL = process.env.REACT_APP_URL;

const UpdateMyPage = ({ onClickToast }) => {
  const [connection, setConnection] = useState(false);
  const [click, setClick] = useState(false);
  const [acceptMail, setAcceptMail] = useState(false);
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [img, setImg] = useState("");
  const [kakaoProfile, setKakaoProfile] = useState("");
  const [viewMoreModal, setViewMoreModal] = useState(false);

  const [loading, setLoding] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => {
    return state.userInfo.userInfo;
  });
  console.log(userInfo.profilePhoto);
  const updateInfo = {
    name: name,
    nickname: nickname,
    // profilePhoto: connection ? kakaoProfile : !connection&&img,
    acceptMail: acceptMail,
  };
  const imgList = [
    "/images/고양이.png",
    "/images/돼지.png",
    "/images/부엉이.png",
    "/images/새.png",
    "/images/토끼.png",
    "/images/펭귄.png",
  ];
  console.log(userInfo.profilePhoto);
  useEffect(() => {
    setLoding(true);
    dispatch(getUserInfoThunk());
    instance
      .get("/users/kakao-profile-photo")
      .then((res) => setKakaoProfile(res.data.data.kakaoProfilePhoto));
    setLoding(false);
    setName(userInfo.name);
    setNickname(userInfo.nickname);
    if (userInfo.profilePhoto && !imgList.includes(userInfo.profilePhoto)) {
      setImg(userInfo.profilePhoto);
      setConnection(true);
    } else if (
      userInfo.profilePhoto &&
      imgList.includes(userInfo.profilePhoto)
    ) {
      setImg(userInfo.profilePhoto);
      setConnection(false);
    } else if (userInfo.profilePhoto === kakaoProfile) {
      setImg(userInfo.profilePhoto);
      setConnection(true);
    }
  }, []);

  return (
    <>
      <UpdateMyPageDiv>
        <div className="updatemypage-back-arrow-area">
          <IoIosArrowBack
            className="updatemypage-back-arrow-icon"
            onClick={() => navigate(-1)}
          />
          <div className="updatemypage-title-text">프로필 수정</div>
          <p
            className="updatemypage-save-icon"
            type="button"
            id="popup"
            onClick={() => {
              onClickToast("등록되었습니다.");
              instance.patch(`/users/info`, updateInfo);
              navigate("/mypage");
            }}
          >
            <FiCheck />
          </p>
        </div>

        {viewMoreModal ? (
          <>
            <div
              className="updatemypage-modal-background"
              onClick={() => {
                setViewMoreModal(false);
              }}
            />

            <UpdateMyPageModal>
              <div className="updatemypage-close-button-area">
                <div
                  onClick={() => {
                    setViewMoreModal(false);
                  }}
                  className="updatemypage-close-button"
                >
                  <HiOutlineX />
                </div>
              </div>
              <div className="updatemypage-wrap-characters">
                {/* <div className="updatemypage-wrap-characters-center"> */}
                {imgList.map((item) => (
                  <MyPageImgDiv onClick={() => setImg(item)}>
                    <SelectImg src={item} check={item} select={img} />
                  </MyPageImgDiv>
                ))}
                {/* </div> */}
              </div>
            </UpdateMyPageModal>
          </>
        ) : null}

        <div className="updatemypage-body-wrap">
          <div className="updatemypage-image-email-input-wrap">
            {!loading ? (
              <>
                <div className="updatemypage-profile-div">
                  <img
                    className="updatemypage-profile-image"
                    src={connection ? kakaoProfile : img}
                    alt="profile"
                  />

                  <div
                    className="updatemypage-profile-pencil-div"
                    onClick={() => {
                      setViewMoreModal(true);
                    }}
                  >
                    <ProfilePencil />
                  </div>
                </div>
              </>
            ) : (
              <>
                <img
                  className="updatemypage-profile-image"
                  src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                  alt="profile"
                />
                <div className="updatemypage-email">
                  <div className="updatemypage-email-text">
                    카카오톡 연동 이메일 주소 :
                  </div>
                  <div className="updatemypage-email-address"></div>
                </div>
              </>
            )}

            <div className="updatemypage-input-area">
              <div className="updatemypage-button-area">
                <div className="updatemypage-input-text">프로필사진</div>
                <div className="updatemypage-toggle-area">
                  <div className="updatemypage-toggle-text">
                    카카오톡 연동 사진
                  </div>

                  <div
                    className="updatemypage-toggle-button-area"
                    onClick={() => {
                      setConnection(!connection);
                      setClick(true);
                      !connection
                        ? setImg(kakaoProfile)
                        : setImg(
                            "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                          );
                    }}
                  >
                    <Toggle
                      background={connection ? "#84CA79" : "#d9d9d9"}
                      click={click}
                      check={connection}
                    />
                  </div>
                </div>
              </div>
              <div className="updatemypage-input-text-div">
                <div className="updatemypage-input-text">이름</div>
              </div>

              <div className="updatemypage-input-div">
                <input
                  className="updatemypage-input"
                  onChange={(e) => setName(e.target.value)}
                  defaultvalue={name}
                  placeholder="이름"
                  maxLength={8}
                />
                <HiPencil className="updatemypage-pencil-icon" />
              </div>
              <div className="updatemypage-input-text-div">
                <div className="updatemypage-input-text">닉네임</div>
              </div>
              <div className="updatemypage-input-div">
                <input
                  className="updatemypage-input"
                  onChange={setNickname}
                  defaultvalue={nickname}
                  placeholder="닉네임"
                  maxLength={8}
                />
                <HiPencil className="updatemypage-pencil-icon" />
              </div>
              <div className="updatemypage-input-text-div">
                <div className="updatemypage-input-text">
                  카카오톡 연동 이메일
                </div>
              </div>

              <div className="updatemypage-email-area">{userInfo.email}</div>
            </div>
          </div>
        </div>
      </UpdateMyPageDiv>
    </>
  );
};

export default UpdateMyPage;
