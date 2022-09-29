//react import
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
//modules import
import {
  getPostThunk,
  getCertThunk,
  getHideThunk,
} from "../../../../Redux/modules/userInfoSlice";
import instance from "../../../../Redux/modules/instance";
//styled import
import styled from "styled-components";
import "./Archive.css";
import TrashIcon from "../../../../static/components/Archive/TrashIcon";
import Cancel from "../../../../static/components/Archive/Cancel";
import BackMypage from "../../../../static/components/Archive/BackMypage";
import { FadeOn } from "../../../../Components/Animation/Animation";

import {
  ImageCard,
  ArchiveSelectDiv,
  CardArea,
  DeleteDiv,
  NonCheck,
  Check,
  SkeletonCard,
  DeleteModal,
  DeleteLine,
  DeleteText,
  DeleteTopText,
  DeleteBottomText,
  DeleteCancelButton,
  ModalArea,
  ArchivePage,
} from "./ArchiveStyled";

const Archive = () => {
  const param = useParams().id;
  const [loading, setLoding] = useState(false);
  const [delState, setDelState] = useState(false);
  const [delArr, setDelArr] = useState([]);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(data);

  const CancelClick = () => {
    setDelState(!delState);
    setModal(false);
    setDelArr([]);
  };
  const SkeletonList = [];
  for (let i = 0; i < 20; i++) {
    SkeletonList.push(i);
  }
  //param 값으로 저장소 분기
  const serverData = useSelector((state) =>
    param === "certification"
      ? state.userInfo.certification
      : param === "post"
      ? state.userInfo.post
      : state.userInfo.hide
  );
  useEffect(() => {
    document.querySelector("body").style.maxWidth = "none";
    setLoding(true);

    //param 값으로 인증글,게시글,숨김글 분기
    param === "certification"
      ? dispatch(getCertThunk())
      : param === "post"
      ? dispatch(getPostThunk())
      : instance
          .get(`/profiles/setting/hidden-missions`)
          .then((res) => setData(res.data.data));
    setData(serverData);
    setLoding(false);
  }, [dispatch]);

  const OnModal = () => {
    document.getElementById("ch-plugin").style.display = "none";
    setModal(!modal);
  };

  const OffModal = () => {
    document.getElementById("ch-plugin").style.display = "block";
    setModal(!modal);
  };

  return (
    <ArchivePage>
      <WrapArchive>
        <div className="back-and-settings-button-area">
          <div
            className="archive-top-button"
            onClick={() => (delState ? CancelClick() : navigate("/mypage"))}
          >
            {!delState ? <BackMypage /> : <Cancel />}
          </div>
          <div className="archive-top-button">
            {!delState ? (
              <ArchiveSelectDiv onClick={() => setDelState(!delState)}>
                {data.length === 0
                  ? null
                  : param === "post"
                  ? "삭제"
                  : param === "certification"
                  ? "숨기기"
                  : "복구"}
              </ArchiveSelectDiv>
            ) : (
              <div onClick={() => (delArr.length > 0 ? OnModal() : null)}>
                <TrashIcon color={delArr.length > 0 ? "#B2E2AB" : "#d9d9d9"} />
              </div>
            )}
          </div>
        </div>
        <div className="archive-grid-area">
          {(!loading && data.length) > 1 ? (
            data.map((item) => (
              <CardArea key={item + item.id}>
                <ImageCard
                  src={item.missionImgUrl}
                  onClick={() => {
                    navigate(
                      param === "post"
                        ? `/detailposts/${item.id} `
                        : `/upload/${item.id}`
                    );
                  }}
                />
                <DeleteDiv
                  display={delState ? "flex" : "none"}
                  onClick={() =>
                    delArr.includes(item.id)
                      ? setDelArr([...delArr.filter((a) => a !== item.id)])
                      : setDelArr([...delArr, item.id])
                  }
                  check={delArr}
                  num={item.id}
                >
                  {" "}
                  {delArr.includes(item.id) ? <Check /> : <NonCheck />}
                </DeleteDiv>
              </CardArea>
            ))
          ) : (!loading && data.length) === 1 ? (
            <CardArea key={data.id}>
              {" "}
              <ImageCard
                src={data[0].missionImgUrl}
                onClick={() =>
                  navigate(
                    param === "post"
                      ? `/detailposts/${data[0].id}`
                      : `/upload/${data[0].id}`
                  )
                }
              />
              <DeleteDiv
                display={delState ? "flex" : "none"}
                onClick={() =>
                  delArr.includes(data[0].id)
                    ? setDelArr([])
                    : setDelArr([...delArr, data[0].id])
                }
                check={delArr}
                num={data[0].id}
              >
                {delArr.includes(data.id) ? <Check /> : <NonCheck />}
              </DeleteDiv>
            </CardArea>
          ) : null}
        </div>
        {data.length === 0 ? (
          <div className="archive-flex-box">
            <div className="archive-flex-text">
              {
                "아직 흔적이 보이지 않아요 🥲 \n 지구를 향한 그린 스텝 보여주세요!"
              }
            </div>
          </div>
        ) : null}
      </WrapArchive>

      {modal ? (
        <ModalArea>
          <DeleteModal>
            <DeleteText>
              <DeleteTopText>
                {param === "certification"
                  ? "게시글을 숨기기 하시면 아카이브 페이지에서 보여지지 않습니다. 숨기기 하시겠습니까?"
                  : param === "post"
                  ? "게시글을 삭제 하시면 게시물 페이지에서 보여지지 않습니다. 삭제 하시겠습니까?"
                  : "해당 게시물들을 인증샷 아카이브로 이동하시겠습니까?"}
              </DeleteTopText>
              <hr className="DeleteLine" />
              {/* <DeleteLine /> */}
              <DeleteBottomText
                onClick={() => {
                  param === "post"
                    ? instance
                        .delete(`/feed`, { data: delArr })
                        .then(() =>
                          setData([
                            ...data.filter((item) => !delArr.includes(item.id)),
                          ])
                        )
                    : instance
                        .patch(`/profiles/missions`, delArr)
                        .then(() =>
                          setData([
                            ...data.filter((item) => !delArr.includes(item.id)),
                          ])
                        );
                  OffModal();
                  setDelArr([]);
                }}
              >
                {param === "certification"
                  ? "가려진 항목으로 이동"
                  : param === "post"
                  ? "삭제하기"
                  : "복구하기"}
              </DeleteBottomText>
            </DeleteText>
            <DeleteCancelButton onClick={() => OffModal()}>
              취소
            </DeleteCancelButton>
          </DeleteModal>
        </ModalArea>
      ) : null}
    </ArchivePage>
  );
};

export default Archive;

const WrapArchive = styled.div`
  background-color: #fcfcfa;
  animation-name: ${FadeOn};
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;
