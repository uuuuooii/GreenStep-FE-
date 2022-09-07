import React, { useEffect, useState } from "react";
import "./DetailPosts.css";
import { getDetailPostThunk } from "../../../Redux/modules/detailPostSlice";
import { useDispatch, useSelector } from "react-redux";

const DetailPosts = () => {
  const [loading, setLoding] = useState(false);
  const dispatch = useDispatch();
  const detailPost = useSelector((state) => state.detailPost.detailPost[0]);

  useEffect(() => {
    setLoding(true);
    dispatch(getDetailPostThunk());
    setLoding(false);
  }, []);

  return (
    <>
      <div className="detail-posts-wrap-shape">
        <div className="detail-posts-mission-name-and-tag-area">
          <div className="detail-posts-mission-name-text">
            {detailPost?.missionName}
          </div>
          <div className="detail-posts-mission-tag-text">{detailPost?.tag}</div>
        </div>
        <img
          className="detail-posts-mission-image-area"
          src={
            detailPost
              ? detailPost.missionImgUrl
              : "https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-gray-solid-color-simple-background-image_557028.jpg"
          }
        ></img>
        <div className="detail-posts-mission-contents-box">
          <p className="detail-posts-mission-contents-text">
            {detailPost?.content}
          </p>
        </div>
        <button className="detail-posts-button-share">공유하기</button>
      </div>
    </>
  );
};

export default DetailPosts;
