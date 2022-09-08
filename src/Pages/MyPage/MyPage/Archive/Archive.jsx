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
import './Archive.css';

import {
  ImageCard,
  ArchiveSelectDiv,
  CardArea,
  Cross,
  Delete,
  DeleteDiv,
  NonCheck,
  Check,
  BackArrow,
  SkeletonCard,
} from './ArchiveStyled';

const Archive = () => {
  const param = useParams().id;
  const [loading, setLoding] = useState(false);
  const [delState, setDelState] = useState(false);
  const [delArr, setDelArr] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const SkeletonList = [];
  for (let i = 0; i < 20; i++) {
    SkeletonList.push(i);
  }
  const data = useSelector((state) =>
    param === 'certification'
      ? state.userInfo.certification
      : state.userInfo.post
  )


  useEffect(() => {
    setLoding(true);
    param === 'certification'
      ? dispatch(getCertThunk())
      : dispatch(getPostThunk());
    setLoding(false);
  }, []);
  return (
    <>
      <div className="wrap-archive">
        <div className="back-and-settings-button-area">
          <div className="back-button">
            {!delState ? (
              <BackArrow onClick={() => navigate('/mypage')} />
            ) : (
              <Cross onClick={() => setDelState(!delState)} />
            )}
          </div>
          <div className="settings-button">
            {!delState ? (
              <ArchiveSelectDiv onClick={() => setDelState(!delState)}>
                선택
              </ArchiveSelectDiv>
            ) : (
              <Delete
                onClick={() => instance.delete(`/feed`, { data: delArr })}
              />
            )}
          </div>
        </div>
        <div className="archive-grid-area">
          {(!loading && data.length) > 1 ? (
            data.map((item) => (
              <CardArea key={item + item.id}>
                <ImageCard
                  src={item.missionImgUrl}
                  onClick={() =>
                    navigate(
                      param === 'certification'
                        ? `/upload/${item.id}`
                        : `/detailposts/${item.id}`
                    )
                  }
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
                    param === 'certification'
                      ? `/upload/${data[0].id}`
                      : `/detailposts/${data[0].id}`
                  )
                }
              />
              <DeleteDiv
                display={delState ? 'flex' : 'none'}
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
    </>
  );
};

export default Archive;
