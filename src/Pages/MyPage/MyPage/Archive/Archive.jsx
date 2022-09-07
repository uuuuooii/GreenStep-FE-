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
import { IoIosArrowBack } from 'react-icons/io';
import { FiSettings } from 'react-icons/fi';

import {
  ImageCard,
  ArchiveSelectDiv,
  CardArea,
  ArchiveArrow,
  Cross,
  Delete,
  DeleteDiv,
  NonCheck,
  Check,
  BackArrow,
} from './ArchiveStyled';

const Archive = () => {
  const URL = process.env.REACT_APP_URL;
  const param = useParams().id;
  const [loading, setLoding] = useState(false);
  const [delState, setDelState] = useState(false);
  const [delArr, setDelArr] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) =>
    param === 'certification'
      ? state.userInfo.certification
      : state.userInfo.post
  );
  useEffect(() => {
    setLoding(true);
    dispatch(getPostThunk());
    dispatch(getCertThunk());
    setLoding(false);
  }, []);
  console.log(delArr);
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
                onClick={() =>
                  instance
                    .delete(`/feed`, { data: delArr })
                    .then((res) => console.log(res))
                }
              />
            )}
          </div>
        </div>
        <div className="archive-grid-area">
          {(!loading && data.length) > 1 ? (
            data.map((item) => (
              <CardArea key={item.id}>
                <ImageCard
                  src={item.missionImgUrl}
                  onClick={() => navigate(`/upload/${item.id}`)}
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
                onClick={() => navigate(`/upload/${data[0].id}`)}
              />
              <DeleteDiv
                display={delState ? 'flex' : 'none'}
                onClick={() => setDelArr([...delArr, data.id])}
              >
                {delArr.includes(data.id) ? <Check /> : <NonCheck />}
              </DeleteDiv>
            </CardArea>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Archive;
