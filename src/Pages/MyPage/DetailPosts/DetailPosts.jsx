//react import
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
//modules import
import { getPostThunk } from '../../../Redux/modules/userInfoSlice';
//component import
import LoadingBar from '../../../Components/LoadingBar/LoadingBar';
import Previous from '../../../static/components/DetailPost/Previous';
import Next from '../../../static/components/DetailPost/Next';
import KakaoShare from '../../../Components/Kakaoshare/Kakaoshare';
//styled import
import './DetailPosts.css';
import { HiOutlineX } from 'react-icons/hi';
import Slide from 'react-reveal/Slide';
import styled from 'styled-components';
import {
  ButtonArea,
  KakaoReactIcon,
  IconDiv,
  TotalButtonArea,
  PostShareButton,
} from '../../Mission/Upload/UploadStyled';
import DoneClap from '../../../static/components/DoneClap';

import { hideArr } from '../../../static/path/Path';

const DetailPosts = ({ onClickToast }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const Param = Number(useParams().id);
  const detailPost = useSelector((state) =>
    state.userInfo.post.length > 1
      ? state.userInfo.post.filter((item) => item.id == Param)[0]
      : state.userInfo.post[0]
  );
  const path = useLocation()
  console.log(path)
  console.log(hideArr)
  //post의 id값들을 담을배열(페이지 이동시 지표)
  const IdArr = [];
  useSelector((state) => state.userInfo.post).map((item) =>
    IdArr.push(item.id)
  );
//내림차순 정렬
  IdArr.sort(function (a, b) {
    return b - a;
  });

  useEffect(() => {
    setLoading(true);
    dispatch(getPostThunk());
    setLoading(false);
  }, []);

  return (
    <>
      <div className="detail-posts-background" />
      {!loading && detailPost ? (
        <Slide bottom>
          <div className="detail-posts-wrap-shape">
            <div className="detail-posts-close-button-area">
              <div
                className="detail-posts-close-button"
                onClick={() => navigate(-1)}
              >
                <HiOutlineX />
              </div>
            </div>
            <div className="detail-posts-mission-name-and-tag-area">
              <div className="detail-posts-mission-name-area">
                <div className="detail-posts-flex-position">
                  <div className="detail-posts-mission-name-text">
                    {detailPost ? detailPost.missionName : 'Mission Name'}
                  </div>
                </div>
                <div className="detail-posts-clap-area">
                  <div className="detail-posts-clap-point">
                    {detailPost.clapCount ? detailPost.clapCount : 0}
                  </div>
                  <div className="detail-posts-flex-position">
                    <DoneClap />
                  </div>
                </div>
              </div>

              <div className="detail-posts-mission-tag-text">
                {detailPost ? detailPost.tag : '#Tag'}
              </div>
            </div>
            <div className="detail-posts-mission-img-div">
              <div className="detail-posts-mission-icon-div">
                <div
                  className="detail-posts-mission-icon"
                  onClick={() =>
                    IdArr[0] == Param
                      ? onClickToast('페이지가 없습니다')
                      : navigate(
                          `/detailposts/${IdArr[IdArr.indexOf(Param) - 1]}`
                        )
                  }
                >
                  <PreviousIcon />
                </div>
                <div
                  className="detail-posts-mission-icon"
                  onClick={() =>
                    IdArr[IdArr.length - 1] == Param
                      ? onClickToast('마지막 페이지 입니다.')
                      : navigate(
                          `/detailposts/${IdArr[IdArr.indexOf(Param) + 1]}`
                        )
                  }
                >
                  <Next />
                </div>
              </div>
              <img
                alt="file"
                className="detail-posts-mission-image-area"
                src={
                  detailPost
                    ? detailPost.missionImgUrl
                    : 'https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-gray-solid-color-simple-background-image_557028.jpg'
                }
              />
            </div>
            <div className="detail-posts-mission-contents-box">
              <div className="detail-posts-mission-contents-text">
                {detailPost ? detailPost.content : '#Content'}
              </div>
            </div>
            <TotalButtonArea>
              <PostShareButton>
                <ButtonArea>
                  <IconDiv>
                    <KakaoReactIcon />
                  </IconDiv>{' '}
                  <KakaoShare>카카오 공유하기</KakaoShare>
                </ButtonArea>
              </PostShareButton>
            </TotalButtonArea>
          </div>
        </Slide>
      ) : (
        <LoadingBar />
      )}
    </>
  );
};

export default DetailPosts;

const PreviousIcon = styled(Previous)`
  position: absolute;
`;
