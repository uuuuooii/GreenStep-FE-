import React, { useEffect, useState } from "react";
import "./DetailPhotoShots.css";
import { getDetailPhotoShotThunk } from "../../../Redux/modules/detailPhotoShotSlice";
import { useDispatch, useSelector } from "react-redux";
import KakaoShare from "../../../Components/Kakaoshare/Kakaoshare";

const DetailPhotoShots = ({ Header }) => {
  const [loading, setLoding] = useState(false);
  const dispatch = useDispatch();
  const detailPhotoShot = useSelector(
    (state) => state.detailPhotoShot.detailPhotoShot[0]
  );

  useEffect(() => {
    setLoding(true);
    dispatch(getDetailPhotoShotThunk());
    setLoding(false);
  }, []);

  return (
    <>
      {Header}
      <div className="detail-photoshots-wrap-shape">
        <div className="detail-photoshots-mission-name-and-tag-area">
          <div className="detail-photoshots-mission-name-text">
            {detailPhotoShot?.missionName}
          </div>
          <div className="detail-photoshots-mission-tag-text">
            {detailPhotoShot?.tag}
          </div>
        </div>
        <img
          className="detail-photoshots-mission-image-area"
          src={
            detailPhotoShot
              ? detailPhotoShot.missionImgUrl
              : "https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-gray-solid-color-simple-background-image_557028.jpg"
          }
        ></img>
        <div className="detail-photoshots-buttons">
          <button className="detail-photoshots-button-upload">
            피드에 올리기
          </button>
          <KakaoShare className="detail-photoshots-button-share">
            공유하기
          </KakaoShare>
        </div>
      </div>
    </>
  );
};

export default DetailPhotoShots;
