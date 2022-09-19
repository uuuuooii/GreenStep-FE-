//react import
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//modules import
import {
  getUserInfoThunk,
  getCertThunk,
  getPostThunk,
} from "../../../Redux/modules/userInfoSlice";
//component import
import Footer from "../../../Components/Footer/Footer";
import ProfilePencil from "../../../static/components/ProfilePencil";
//styled import
import "./MyPage.css";
import styled from "styled-components";
import { FadeOn, SlideBottom } from "../../Feed/FeedStyled";
import { HiDotsHorizontal } from "react-icons/hi";
import { ArchiveArrow } from "./Archive/ArchiveStyled";
import ViewMoreRowBar from "../../../static/components/ViewMoreRowBar";
import ViewMoreAlarm from "../../../static/components/ViewMoreAlarm";
import ViewMoreHidden from "../../../static/components/ViewMoreHidden";
import ViewMoreCC from "../../../static/components/ViewMoreCC";
import ViewMoreQuit from "../../../static/components/ViewMoreQuit";
import ViewMoreLogOut from "../../../static/components/ViewMoreLogOut";

const MyPageModal = styled.div`
  width: 100%;
  position: fixed;
  bottom: 65px;
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

const MyPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fcfcfa;
  animation-name: ${FadeOn};
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;

const MyPage = () => {
  const [loading, setLoding] = useState(false);
  const [viewMoreModal, setViewMoreModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const certification = useSelector((state) => state.userInfo.certification);
  const post = useSelector((state) => state.userInfo.post);

  const FirstText = `아직 ${
    userInfo.nickname ? userInfo.nickname : "@@@"
  }님의 흔적이 보이지 않아요 🥲 \n 지구를 향한 그린 스텝 보여주세요!`;
  const SecondText = `다른 이도 ${
    userInfo.nickname ? userInfo.nickname : "@@@"
  }님이 그린 스텝을 보고싶어해요! 🤩 \n 피드에 공유해 주세요!`;
  useEffect(() => {
    setLoding(true);
    dispatch(getUserInfoThunk());
    dispatch(getCertThunk());
    dispatch(getPostThunk());
    setLoding(false);
  }, []);
  return (
    <>
      <MyPageDiv>
        <div className="mypage-three-dots-area">
          <HiDotsHorizontal
            className="mypage-three-dots-icon"
            // onClick={() => navigate("/updatemypage")}
            onClick={() => {
              setViewMoreModal(true);
            }}
          />
        </div>

        {viewMoreModal ? (
          <>
            <div
              className="mypage-modal-background"
              onClick={() => {
                setViewMoreModal(false);
              }}
            ></div>

            <MyPageModal>
              <div
                onClick={() => {
                  setViewMoreModal(false);
                }}
                className="mypage-modal-bar"
              >
                <ViewMoreRowBar />
              </div>
              <div className="mypage-wrap-view-more">
                <div className="mypage-modal-alarm-area">
                  <ViewMoreAlarm />
                  <div
                    className="mypage-modal-alarm-text"
                    onClick={() => navigate("/alarm")}
                  >
                    알림 설정
                  </div>
                </div>
                <div className="mypage-modal-hidden-area">
                  <ViewMoreHidden />
                  <div className="mypage-modal-hidden-text">가려진 항목</div>
                </div>
                <div className="mypage-modal-cc-area">
                  <ViewMoreCC />
                  <div className="mypage-modal-cc-text">고객센터</div>
                </div>
                <div className="mypage-modal-quit-area">
                  <ViewMoreQuit />
                  <div className="mypage-modal-quit-text">
                    지구 그만 지키기 (탈퇴하기)
                  </div>
                </div>
                <div className="mypage-modal-logout-area">
                  <ViewMoreLogOut />
                  <div className="mypage-modal-logout-text">로그아웃</div>
                </div>
              </div>
            </MyPageModal>
          </>
        ) : null}

        {!loading ? (
          <>
            <div className="image-nick-email">
              <div className="image-div">
                <img src={userInfo.profilePhoto} className="image-area" />
                <div
                  className="image-pencil-div"
                  onClick={() => navigate("/updatemypage")}
                >
                  <ProfilePencil />
                </div>
              </div>

              <div className="nick-and-email-area">
                <div className="nickname-text">
                  {userInfo.nickname ? userInfo.nickname : "Nickname"}
                </div>
                <div className="email-text">
                  {userInfo.email ? userInfo.email : "Email"}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="image-nick-email">
            <div className="image-area"></div>
            <div className="nickname-text">
              {userInfo.nickname ? userInfo.nickname : "Nickname"}
            </div>
            <div className="email-text">
              {userInfo.email ? userInfo.email : "Email"}
            </div>
          </div>
        )}

        <div className="photoshots-archive-area">
          <div className="photoshots-viewmore-box">
            {!certification.length == 0 ? (
              <div className="photoshots-text-and-icon">
                <div className="photoshots-text">인증샷 아카이브</div>
                <div className="photoshots-viewmore-icon">
                  <ArchiveArrow
                    onClick={() => navigate("/archive/certification")}
                  />
                </div>
              </div>
            ) : (
              <div className="photoshots-text-and-icon">
                <div className="photoshots-text-none">인증샷 아카이브</div>
                <div className="photoshots-viewmore-icon-none">
                  <ArchiveArrow />
                </div>
              </div>
            )}
          </div>

          <div className="photoshots-archive-box">
            {!loading && certification.length > 1 ? (
              certification.map((item, index) => (
                <img
                  src={item.missionImgUrl}
                  className="photoshots-archive-images"
                  key={item.missionImgUrl + index}
                  alt="archive"
                  onClick={() => navigate(`/upload/${item.id}`)}
                />
              ))
            ) : !loading && certification.length === 1 ? (
              <img
                src={certification[0].missionImgUrl}
                className="photoshots-archive-images"
                alt="archive"
                onClick={() => navigate(`/upload/${certification[0].id}`)}
              />
            ) : certification.length === 0 ? (
              <>
                <div className="mypage-flex-box">
                  <div className="mypage-flex-text">{FirstText}</div>
                </div>
              </>
            ) : null}
          </div>
        </div>
        <div className="posts-archive-area">
          <div className="posts-viewmore-box">
            {!post.length == 0 ? (
              <div className="posts-text-and-icon">
                <div className="posts-text">게시물 아카이브</div>
                <div className="posts-viewmore-icon">
                  <ArchiveArrow onClick={() => navigate("/archive/post")} />
                </div>
              </div>
            ) : (
              <div className="posts-text-and-icon">
                <div className="posts-text-none">게시물 아카이브</div>
                <div className="posts-viewmore-icon-none">
                  <ArchiveArrow />
                </div>
              </div>
            )}
          </div>
          <div className="posts-archive-box">
            {!loading && post.length > 1 ? (
              post.map((item, index) => (
                <img
                  src={item.missionImgUrl}
                  className="photoshots-archive-images"
                  key={item.missionImgUrl + index}
                  alt="archive"
                  onClick={() => navigate(`/detailposts/${item.id}`)}
                />
              ))
            ) : !loading && post.length === 1 ? (
              <img
                src={post[0].missionImgUrl}
                className="photoshots-archive-images"
                alt="archive"
                onClick={() => navigate(`/detailposts/${post[0].id}`)}
              />
            ) : post.length === 0 ? (
              <>
                <div className="mypage-flex-box">
                  <div className="mypage-flex-text">{SecondText}</div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </MyPageDiv>
      <Footer />
    </>
  );
};

export default MyPage;
