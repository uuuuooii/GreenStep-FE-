//react import
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useInput from "../../../hooks/useInput";
//components import
import LoadingBar from "../../../Components/LoadingBar/LoadingBar";
import KakaoShare from "../../../Components/Kakaoshare/Kakaoshare";
//modules import
import instance from "../../../Redux/modules/instance";
import { getCertThunk } from "../../../Redux/modules/userInfoSlice";
//styled import
import "./Upload.css";
import { HiOutlineX } from "react-icons/hi";
import "../../../Components/Toast/Toast.css";
import {
  UploadContentTextArea,
  UploadButton,
  ButtonArea,
  KakaoReactIcon,
  UploadIconDiv,
  KakaoIconDiv,
  ButtonText,
  TotalButtonArea,
  ShareButton,
  ShareText,
} from "./UploadStyled";
import Slide from "react-reveal/Slide";
import Next from "../../../static/components/DetailPost/Next";
import Previous from "../../../static/components/DetailPost/Previous";
import UploadFeed from "../../../static/components/DetailPost/UploadFeed";

const Upload = ({ onClickToast }) => {
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

  const Uploading = () => {
    instance.post(`/profiles/missions/${param}`, uploadText);
    onClickToast("게시물 등록이 완료되었습니다.");
    navigate("/archive/certification");
  };

  useEffect(() => {
    setLoding(true);
    dispatch(getCertThunk());
    setLoding(false);
  }, []);
  return (
    <>
      <Slide bottom>
        <div className="upload-wrap-shape">
          {!loading && data ? (
            <>
              <div className="upload-mission-close-button-area">
                <div
                  className="upload-mission-close-button"
                  onClick={() => navigate("/archive/certification")}
                >
                  <HiOutlineX />
                </div>
              </div>
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
                        ? onClickToast("페이지가 없습니다.")
                        : navigate(`/upload/${IdArr[IdArr.indexOf(param) - 1]}`)
                    }
                  >
                    <Previous />
                  </div>
                  <div
                    onClick={() =>
                      IdArr[IdArr.length - 1] == param
                        ? onClickToast("마지막 페이지 입니다.")
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
                onfocus="this.placeholder = ''"
              />
              <TotalButtonArea>
               
                <UploadButton
                  onClick={() =>
                    data.onFeed
                      ? onClickToast("이미 등록한 게시물입니다.")
                      : Uploading()
                  }
                >
                  <ButtonArea>
                    <UploadIconDiv>
                      <UploadFeed />
                    </UploadIconDiv>{" "}
                    <ShareText>피드 올리기</ShareText>
                  </ButtonArea>
                </UploadButton>

                <ShareButton>
                  <ButtonArea>
                    <KakaoIconDiv>
                      <KakaoReactIcon />
                    </KakaoIconDiv>{" "}
                    <KakaoShare>카카오 공유하기</KakaoShare>
                  </ButtonArea>
                </ShareButton>
              </TotalButtonArea>
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
