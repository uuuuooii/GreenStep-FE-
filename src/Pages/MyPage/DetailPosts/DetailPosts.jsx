//react import
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
//modules import
import { getPostThunk } from '../../../Redux/modules/userInfoSlice';
//component import
import LoadingBar from '../../../Components/LoadingBar/LoadingBar';
import Previous from '../../../static/components/DetailPost/Previous';
import Next from '../../../static/components/DetailPost/Next';
//styled import
import './DetailPosts.css';
import Slide from 'react-reveal/Slide';
import styled from 'styled-components';

const DetailPosts = ({ Header }) => {
  const navigate = useNavigate();
  const [loading, setLoding] = useState(false);
  const dispatch = useDispatch();
  const Param = Number(useParams().id);
  const detailPost = useSelector((state) =>
  // console.log(state.userInfo.post)
    state.userInfo.post.length > 1
      ? state.userInfo.post.filter(
          (item) => item.id== Param
        )[0]
      : state.userInfo.post[0]
  );
  const IdArr = [];
  useSelector((state) => state.userInfo.post).map((item) =>
    IdArr.push(item.id)
  );


  IdArr.sort(function (a, b) {
    return b - a;
  });

  useEffect(() => {
    setLoding(true);
    dispatch(getPostThunk());
    setLoding(false);
  }, []);

  return (
    <>
      {Header}
      {!loading ? (
        <Slide bottom>
          <div className="detail-posts-wrap-shape">
            <div className="detail-posts-mission-name-and-tag-area">
              <div className="detail-posts-mission-name-text">
                {detailPost ? detailPost.missionName : 'Mission Name'}
              </div>
              <div className="detail-posts-mission-tag-text">
                {detailPost ? detailPost.tag : '#Tag'}
              </div>
            </div>
            <div className="detail-posts-mission-img-div">
              <div className="detail-posts-mission-icon-div">
                <div
                  onClick={() =>
                    IdArr[0] == Param
                      ? alert('페이지가 없습니다')
                      : navigate(
                          `/detailposts/${IdArr[IdArr.indexOf(Param) -1]}`
                        )
                  }
                >
                  <PreviousIcon />
                </div>
                <div
                  onClick={() =>
                    IdArr[IdArr.length - 1] == Param
                      ? alert('마지막 페이지 입니다.')
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
              <p className="detail-posts-mission-contents-text">
                {detailPost ? detailPost.content : '#Content'}
              </p>
            </div>
            <button className="detail-posts-button-share">공유하기</button>
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
