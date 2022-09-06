//react import
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
//modules import
import {
  getPostThunk,
  getCertThunk,
} from '../../../../Redux/modules/userInfoSlice';
//styled import
import './Archive.css';
import { IoIosArrowBack } from 'react-icons/io';
import { FiSettings } from 'react-icons/fi';
import { ImageCard } from './ArchiveStyled';

const Archive = () => {
  const param = useParams().id;
  const [loading, setLoding] = useState(false);
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
  return (
    <>
      <div className="wrap-archive">
        <div className="back-and-settings-button-area">
          <div className="back-button">
            <IoIosArrowBack />
          </div>
          <div className="settings-button">
            <FiSettings />
          </div>
        </div>
        <div className="archive-grid-area">
          {(!loading && data.length) > 1 ? (
            data.map((item) => (
              <ImageCard
                className="archive-image-div"
                src={item.missionImgUrl}
                onClick={() => navigate(`/upload/${item.id}`)}
              />
            ))
          ) : (!loading && data.length) === 1 ? (
            <ImageCard
              className="archive-image-div"
              src={data[0].missionImgUrl}
              onClick={() => navigate(`/upload/${data[0].id}`)}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Archive;
