//react import
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
//modules import
import {
  getPostThunk,
  getCertThunk,
} from "../../../../Redux/modules/userInfoSlice";
import instance from "../../../../Redux/modules/instance";
//styled import
import "./Archive.css";
import TrashIcon from "../../../../static/components/Archive/TrashIcon";
import Cancel from "../../../../static/components/Archive/Cancel";
import BackMypage from "../../../../static/components/Archive/BackMypage";
import Slide from "react-reveal/Slide";

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
} from "./ArchiveStyled";

const Archive = ({ Header }) => {
  const param = useParams().id;
  const [loading, setLoding] = useState(false);
  const [delState, setDelState] = useState(false);
  const [delArr, setDelArr] = useState([]);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const SkeletonList = [];
  for (let i = 0; i < 20; i++) {
    SkeletonList.push(i);
  }
  const data = useSelector((state) =>
    param === "certification"
      ? state.userInfo.certification
      : state.userInfo.post
  );

  useEffect(() => {
    setLoding(true);
    param === "certification"
      ? dispatch(getCertThunk())
      : dispatch(getPostThunk());
    setLoding(false);
  }, []);
  return (
    <>
      {Header}
      <Slide right>
        <div className="wrap-archive">
          <div className="back-and-settings-button-area">
            <div
              className="archive-top-button"
              onClick={() =>
                delState ? setDelState(!delState) : navigate("/mypage")
              }
            >
              {!delState ? <BackMypage /> : <Cancel />}
            </div>
            <div className="archive-top-button">
              {!delState ? (
                <ArchiveSelectDiv onClick={() => setDelState(!delState)}>
                  {param === "post" ? "삭제" : "숨기기"}
                </ArchiveSelectDiv>
              ) : (
                <div
                  onClick={() => (delArr.length > 0 ? setModal(!modal) : null)}
                >
                  <TrashIcon
                    color={delArr.length > 0 ? "#B2E2AB" : "#d9d9d9"}
                  />
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
                        // param === 'post' || item.onFeed
                        //   ? `/detailposts/${item.id} `
                        //   :
                        `/upload/${item.id}`
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
                      param === "post" || data[0].OnFeed
                        ? `/detailposts/${data[0].id}`
                        : `/upload/${data[0].id}`
                    )
                  }
                />
                <DeleteDiv
                  display={delState ? "flex" : "none"}
                  onClick={() => setDelArr([...delArr, data.id])}
                >
                  {delArr.includes(data.id) ? <Check /> : <NonCheck />}
                </DeleteDiv>
              </CardArea>
            ) : (
              SkeletonList.map((item, index) => (
                <SkeletonCard key={item * index} />
              ))
            )}
          </div>
        </div>
      </Slide>
      {modal ? (
        <ModalArea>
          {" "}
          <Slide bottom>
            {" "}
            <DeleteModal>
              <DeleteText>
                <DeleteTopText>
                  This photo will be deleted from iCloud Photos on all your
                  devices
                </DeleteTopText>
                <DeleteLine />
                <DeleteBottomText
                  onClick={() => {
                    param === "post"
                      ? instance.delete(`/feed`, { data: delArr })
                      : instance.delete(`/profiles/missions`, { data: delArr });
                    setModal(!modal);
                  }}
                >
                  Delete Photo
                </DeleteBottomText>
              </DeleteText>
              <DeleteCancelButton onClick={() => setModal(!modal)}>
                취소
              </DeleteCancelButton>
            </DeleteModal>
          </Slide>
        </ModalArea>
      ) : null}
    </>
  );
};

export default Archive;
