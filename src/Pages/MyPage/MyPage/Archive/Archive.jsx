//react import
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
//modules import
import {
  getPostThunk,
  getCertThunk,
} from '../../../../Redux/modules/userInfoSlice';
import instance from '../../../../Redux/modules/instance';
//styled import
import styled from 'styled-components';
import './Archive.css';
import TrashIcon from '../../../../static/components/Archive/TrashIcon';
import Cancel from '../../../../static/components/Archive/Cancel';
import BackMypage from '../../../../static/components/Archive/BackMypage';
import { FadeOn } from '../../../../Components/Animation/Animation';

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
} from './ArchiveStyled';

const Archive = ({ Header }) => {
  const param = useParams().id;
  const [loading, setLoding] = useState(false);
  const [delState, setDelState] = useState(false);
  const [delArr, setDelArr] = useState([]);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    param === 'certification'
      ? state.userInfo.certification
      : state.userInfo.post
  );
  useEffect(() => {
    setLoding(true);
    //param 값으로 인증글,게시글,숨김글 분기
    param === 'certification'
      ? dispatch(getCertThunk())
      : dispatch(getPostThunk());
    setData(serverData);
    setLoding(false);
  }, [dispatch]);
  return (
    <>
      {Header}

      <WrapArchive>
        <div className="back-and-settings-button-area">
          <div
            className="archive-top-button"
            onClick={() => (delState ? CancelClick() : navigate('/mypage'))}
          >
            {!delState ? <BackMypage /> : <Cancel />}
          </div>
          <div className="archive-top-button">
            {!delState ? (
              <ArchiveSelectDiv onClick={() => setDelState(!delState)}>
                {param === 'post' ? '삭제' : '숨기기'}
              </ArchiveSelectDiv>
            ) : (
              <div
                onClick={() => (delArr.length > 0 ? setModal(!modal) : null)}
              >
                <TrashIcon color={delArr.length > 0 ? '#B2E2AB' : '#d9d9d9'} />
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
                      param === 'post'
                        ? `/detailposts/${item.id} `
                        : `/upload/${item.id}`
                    );
                  }}
                />
                <DeleteDiv
                  display={delState ? 'flex' : 'none'}
                  onClick={() =>
                    delArr.includes(item.id)
                      ? setDelArr([...delArr.filter((a) => a !== item.id)])
                      : setDelArr([...delArr, item.id])
                  }
                  check={delArr}
                  num={item.id}
                >
                  {' '}
                  {delArr.includes(item.id) ? <Check /> : <NonCheck />}
                </DeleteDiv>
              </CardArea>
            ))
          ) : (!loading && data.length) === 1 ? (
            <CardArea key={data.id}>
              {' '}
              <ImageCard
                src={data[0].missionImgUrl}
                onClick={() =>
                  navigate(
                    param === 'post'
                      ? `/detailposts/${data[0].id}`
                      : `/upload/${data[0].id}`
                  )
                }
              />
              <DeleteDiv
                display={delState ? 'flex' : 'none'}
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
                '아직 흔적이 보이지 않아요 🥲 \n 지구를 향한 그린 스텝 보여주세요!'
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
                {param === 'certification'
                  ? '인증샷을 숨기면 아카이브 페이지에서 보이지 않습니다. 숨기기 하시겠습니까?'
                  : '게시글을 삭제 하시면 게시물 페이지에서 보여지지 않습니다. 삭제 하시겠습니까?'}
              </DeleteTopText>
              <hr className="DeleteLine" />
              {/* <DeleteLine /> */}
              <DeleteBottomText
                onClick={() => {
                  param === 'post'
                    ? instance
                        .delete(`/feed`, { data: delArr })
                        .then(() =>
                          setData([
                            ...data.filter((item) => !delArr.includes(item.id)),
                          ])
                        )
                    : instance.put(`/profiles/missions`, { data: delArr });
                  setModal(!modal);
                  setDelArr([]);
                }}
              >
                {param === 'certification'
                  ? '가려진 항목으로 이동'
                  : '삭제하기'}
              </DeleteBottomText>
            </DeleteText>
            <DeleteCancelButton onClick={() => setModal(!modal)}>
              취소
            </DeleteCancelButton>
          </DeleteModal>
        </ModalArea>
      ) : null}
    </>
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
