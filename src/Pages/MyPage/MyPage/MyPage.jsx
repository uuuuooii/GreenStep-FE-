//react import
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './MyPage.css';
import Footer from '../../../Components/Footer/Footer';
//modules import
import {
  getUserInfoThunk,
  getCertThunk,
  getPostThunk,
} from '../../../Redux/modules/userInfoSlice';
//component import
import { MypageSkeleton } from '../../../Components/Skeleton/SkeletonStyled';
import { FiSettings } from 'react-icons/fi';
import { ArchiveArrow } from './Archive/ArchiveStyled';
import Slide from 'react-reveal/Slide';
// import Slide from 'react-reveal/Fade';

const MyPage = () => {
  const [loading, setLoding] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const certification = useSelector((state) => state.userInfo.certification);
  const post = useSelector((state) => state.userInfo.post);

  useEffect(() => {
    setLoding(true);
    dispatch(getUserInfoThunk());
    dispatch(getCertThunk());
    dispatch(getPostThunk());
    setLoding(false);
  }, []);

  return (
    <>
      <Slide left>
        <div className="whole-mypage">
          <div className="mypage-profile-setting">
            <div className="profile-text">프로필</div>
            <div className="profile-setting">
              <FiSettings />
            </div>
          </div>

          {!loading ? (
            <div className="image-nick-email">
              <img src={userInfo.profilePhoto} className="image-area"></img>
              <div className="nick-and-email-area">
                <div className="nickname-text">{userInfo.nickname}</div>
                <div className="email-text">{userInfo.email}</div>
              </div>
            </div>
          ) : (
            <div className="image-nick-email">
              <div className="image-area"></div>
            </div>
          )}

          <div className="photoshots-archive-area">
            <div className="photoshots-viewmore-box">
              <div className="photoshots-text-and-icon">
                <div className="photoshots-text">인증샷 아카이브</div>
                <div className="photoshots-viewmore-icon">
                  <ArchiveArrow
                    onClick={() => navigate('/archive/certification')}
                  />
                </div>
              </div>
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
                />
              ) : (
                <>
                  <MypageSkeleton />
                  <MypageSkeleton />
                  <MypageSkeleton />
                </>
              )}
            </div>
          </div>
          <div className="posts-archive-area">
            <div className="posts-viewmore-box">
              <div className="posts-text-and-icon">
                <div className="posts-text">게시물 아카이브</div>
                <div className="posts-viewmore-icon">
                  <ArchiveArrow onClick={() => navigate('/archive/post')} />
                </div>
              </div>
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
                  ></img>
                ))
              ) : !loading && post.length === 1 ? (
                <img
                  src={post[0].missionImgUrl}
                  className="photoshots-archive-images"
                  alt="archive"
                ></img>
              ) : (
                <>
                  <MypageSkeleton />
                  <MypageSkeleton />
                  <MypageSkeleton />
                </>
              )}
            </div>
          </div>
        </div>
      </Slide>
      <Footer />
    </>
  );
};

export default MyPage;
