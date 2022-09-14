//react import
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useInput from "../../../hooks/useInput";
//components import
import LoadingBar from "../../../Components/LoadingBar/LoadingBar";
import Toast from "../../../Components/Toast/Toast";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from "react-toasts";
//modules import
import instance from "../../../Redux/modules/instance";
import { getCertThunk } from "../../../Redux/modules/userInfoSlice";
//styled import
import "./Upload.css";
import {
  UploadContentTextArea,
  UploadButton,
  ShareButton,
  UploadSkeleton,
  ButtonArea,
} from "./UploadStyled";
import Slide from "react-reveal/Slide";
import Next from "../../../static/components/DetailPost/Next";
import Previous from "../../../static/components/DetailPost/Previous";

const Upload = ({ Header }) => {
  const [content, contentHandler] = useInput("");
  const param = Number(useParams().id);
  const [loading, setLoding] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const certList = useSelector((state) => state.userInfo.certification);
  const data =
    certList.length > 1
      ? certList.filter((item) => item.id == param)[0]
      : certList[0];

  const uploadText = { content: content };
  const IdArr = [];
  certList.map((item) => IdArr.push(item.id));
  IdArr.sort(function (a, b) {
    return b - a;
  });

  const onClickToastAlready = () => {
    ToastsStore.success("이미 작성한 게시물입니다");
  };
  const onClickToastComplete = () => {
    ToastsStore.success("게시물 업로드가 완료되었습니다");
  };

  const Uploading = ({ Header }) => {
    instance.post(`/profiles/missions/${param}`, uploadText);
    onClickToastComplete();
    navigate("/mypage");
  };

  useEffect(() => {
    setLoding(true);
    dispatch(getCertThunk());
    setLoding(false);
  }, []);
  return (
    <>
      {Header}

      {/* 토스트 알람창의 CSS */}
      <style jsx="true">{`
        .toast {
          font-size: 13px !important;
          color: #fff !important;
          justify-content: center;
          align-items: center;
          background-color: rgba(178, 226, 171, 0.75) !important;
          box-shadow: 0px 2px 2px #dadada;
          border-radius: 20px !important;
          min-height: 20px !important;
          width: 200px !important;
          margin: 4px auto !important;
          padding: 8px 35px;
          display: inline-block !important;
          line-height: 22px !important;
        }
      `}</style>

      {/* <button
          type="button"
          id="popup"
          onClick={onClickToastPopup}
          className="toast-button"
        >
          toast
        </button> */}

      <ToastsContainer
        className="custom-alert-position"
        position={ToastsContainerPosition.BOTTOM_CENTER}
        store={ToastsStore}
        lightBackground
      />

      <Slide bottom>
        <div className="upload-wrap-shape">
          {!loading && data ? (
            <>
              <div className="upload-mission-name-and-tag-area">
                <div className="upload-mission-name-text">
                  {data.missionName ? data.missionName : "Mission Name"}
                </div>
                <div className="upload-mission-tag-text">
                  {data.tag ? data.tag : "#Tag"}
                </div>
              </div>
              <div className="upload-mission-image-div">
                <div className="upload-mission-icon-div">
                  <div
                    onClick={() =>
                      IdArr[0] == param
                        ? alert("페이지가 없습니다.")
                        : navigate(`/upload/${IdArr[IdArr.indexOf(param) - 1]}`)
                    }
                  >
                    <Previous />
                  </div>
                  <div
                    onClick={() =>
                      IdArr[IdArr.length - 1] == param
                        ? alert("마지막 페이지 입니다.")
                        : navigate(`/upload/${IdArr[IdArr.indexOf(param) + 1]}`)
                    }
                  >
                    <Next />
                  </div>
                </div>
                <img
                  className="upload-mission-image-area"
                  src={
                    data.missionImgUrl
                      ? data.missionImgUrl
                      : "/images/고양이.png"
                  }
                />
              </div>
              <UploadContentTextArea
                className="upload-contents-input"
                onChange={contentHandler}
                maxLength={140}
                placeholder="인증샷 설명을 자유롭게 적어주세요"
              ></UploadContentTextArea>
              <ButtonArea>
                {" "}
                <UploadButton
                  className="upload-button-upload"
                  type="button"
                  id="popup"
                  onClick={() =>
                    data.onFeed ? onClickToastAlready() : Uploading()
                  }
                >
                  피드에 올리기
                </UploadButton>
                <ShareButton className="upload-button-share">
                  공유하기
                </ShareButton>
              </ButtonArea>
            </>
          ) : (
            <LoadingBar />
          )}
        </div>
      </Slide>
    </>
  );
};

export default Upload;
