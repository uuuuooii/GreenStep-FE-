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
import Slide from 'react-reveal/Slide';
import { FadeOn } from '../../../Feed/FeedStyled';

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

  const SkeletonList = [];
  for (let i = 0; i < 20; i++) {
    SkeletonList.push(i);
  }
  const serverData = useSelector((state) =>
    param === 'certification'
      ? state.userInfo.certification
      : state.userInfo.post
  );
  // const PostNavigate = (id) => {
  //   if(param==="post")
  //   navigate(
  //     param === "post" || data[0].OnFeed
  //       ? `/detailposts/${data[0].id}`
  //       : `/upload/${data[0].id}`
  //   )
  // }

  useEffect(() => {
    setLoding(true);
    param === 'certification'
      ? dispatch(getCertThunk())
      : dispatch(getPostThunk());
    setData(serverData);
    setLoding(false);
  }, [dispatch]);
  console.log(param);
  return (
    <>
      {Header}

      <WrapArchive>
        {/* <button onClick={()=>instance.get('/profiles/setting/hidden-missions').then((res)=>console.log(res))}>테스트</button> */}
        <div className="back-and-settings-button-area">
          <div
            className="archive-top-button"
            onClick={() =>
              delState ? setDelState(!delState) : navigate('/mypage')
            }
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
          ) : (
            SkeletonList.map((item, index) => (
              <SkeletonCard key={item * index} />
            ))
          )}
        </div>
      </WrapArchive>

      {modal ? (
        <ModalArea>
          {' '}
          <Slide bottom>
            {' '}
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
                              ...data.filter(
                                (item) => !delArr.includes(item.id)
                              ),
                            ])
                          )
                      : instance
                          .patch(`/profiles/missions`, { data: delArr })
                          .then((res) => console.log(res));
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
          </Slide>
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
