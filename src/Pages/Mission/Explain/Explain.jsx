//react import
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
//styled import
import './Explain.css';
import { FiCamera } from 'react-icons/fi';
import {
  __GetTodaymission,
  __GetDailymission,
  __GetWeeklymission,
} from '../../../Redux/modules/mission';
import Slide from 'react-reveal/Slide';
//component import
import LoadingBar from '../../../Components/LoadingBar/LoadingBar';
import WatingLeap from '../../../static/components/WatingLeap';

const Explain = () => {
  const [loding, setLoding] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const paramsNum = useParams().id.split('&')[0];
  const paramsCategory = useParams().id.split('&')[1];
  const select = useSelector((state) =>
    paramsCategory === 'challenge'
      ? state.mission.challenge[0]
      : paramsCategory === 'daily'
      ? state.mission.daily.filter((item) => item.missionId == paramsNum)[0]
      : state.mission.weekly.filter((item) => item.missionId == paramsNum)[0]
  );
  useEffect(() => {
    setLoding(true);
    paramsCategory === 'challenge'
      ? dispatch(__GetTodaymission())
      : paramsCategory === 'daily'
      ? dispatch(__GetDailymission())
      : dispatch(__GetWeeklymission());
    setLoding(false);
  }, [dispatch]);
  return (
    <>
      <div className="explain-back-div" onClick={() => navigate('/mission')} />
      {!loding && select ? (
        <Slide bottom>
          <div className="explain-wrap-shape">
            <div className="explain-mission-name-and-tag-area">
              <div className="explain-mission-name-text">
                {select ? select.missionName : 'MissionName'}
              </div>
              <div className="explain-mission-tag-text">
                {select ? select.tag : '#Tag'}
              </div>
              <p className="explain-mission-contents-text">
                {select
                  ? select.missionContent
                  : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi, proin a neque vel facilisi vel tempor etiam. Lorem vitae ut ac auctor.'}
              </p>
            </div>

            <img
              className="explain-mission-image-area"
              src={
                select
                  ? select.missionImageUrl
                  : 'https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-gray-solid-color-simple-background-image_557028.jpg'
              }
            />
            <button className="explain-button-go-camera">
              <div className="explain-button-go-camera-icon">
                <FiCamera
                  onClick={() =>
                    navigate(`/missioncamera/${paramsNum}&${paramsCategory}`)
                  }
                />
              </div>
            </button>
          </div>
        </Slide>
      ) : !loding && select.status === 'WAITING' ? (
        <>
          <div
            className="explain-back-div"
            onClick={() => navigate('/mission')}
          />
          <Slide bottom>
            <div className="explain-wrap-shape">
              <div className="explain-mission-name-and-tag-area">
                <div className="explain-mission-name-text">
                  {select ? select.missionName : 'MissionName'}
                </div>
                <div className="explain-mission-tag-text">
                  {select ? select.tag : '#Tag'}
                </div>
                <p className="explain-mission-contents-text">
                  {select
                    ? select.missionContent
                    : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi, proin a neque vel facilisi vel tempor etiam. Lorem vitae ut ac auctor.'}
                </p>
              </div>

              <div className="explain-mission-center-area">
                <WatingLeap />
              </div>
              <div className="explain-waiting-bar">인증 대기중</div>
            </div>
          </Slide>
        </>
      ) : (
        <LoadingBar />
      )}
    </>
  );
};

export default Explain;
