import React from "react";
import "./MyPage.css";
import Footer from "../../../Components/Footer/Footer";
import { FiSettings } from "react-icons/fi";
import { MdOutlineDoubleArrow } from "react-icons/md";

const MyPage = () => {
  return (
    <>
      <div className="whole-mypage">
        <div className="mypage-profile-setting">
          <div className="profile-text">프로필</div>
          <div className="profile-setting">
            <FiSettings />
          </div>
        </div>
        <div className="image-nick-email">
          <div className="image-area"></div>
          <div className="nick-and-email-area">
            <div className="nickname-text">닉네임</div>
            <div className="email-text">이메일주소@gmail.com</div>
          </div>
        </div>
        <div className="photoshots-archive-area">
          <div className="photoshots-viewmore-box">
            <div className="photoshots-viewmore-box">
              <div className="photoshots-text-and-icon">
                <div className="photoshots-text">인증샷 아카이브</div>
                <div className="photoshots-viewmore-icon">
                  <MdOutlineDoubleArrow />
                </div>
              </div>
            </div>
          </div>
          <div className="photoshots-archive-box">
            <div className="photoshots-archive-images"></div>
            <div className="photoshots-archive-images"></div>
            <div className="photoshots-archive-images"></div>
          </div>
        </div>
        <div className="posts-archive-area">
          <div className="posts-viewmore-box">
            <div className="posts-text-and-icon">
              <div className="posts-text">게시물 아카이브</div>
              <div className="posts-viewmore-icon">
                <MdOutlineDoubleArrow />
              </div>
            </div>
          </div>
          <div className="posts-archive-box">
            <div className="posts-archive-images"></div>
            <div className="posts-archive-images"></div>
            <div className="posts-archive-images"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyPage;
