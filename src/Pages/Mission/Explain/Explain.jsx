import React, { useEffect } from 'react';
import './Explain.css';
import { FiCamera } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { __GetTodaymission } from '../../../Redux/modules/mission';
const Explain = () => {
  const loaded =  useSelector((state)=>state.mission.loaded)
  const dispatch = useDispatch();
  const paramsNum = useParams().id.split('&')[0];
  const paramsCategory = useParams().id.split('&')[1]; 
  const select = useSelector((state) =>
    paramsCategory === 'challenge'
      ? state.mission.challenge[0]
      : paramsCategory === 'daily'
      ? state.mission.daily
      : state.mission.weekly
  )
  // const text = select.map((item)=>item.missionId !== paramsNum ? item : []);
  useEffect(() => {
    dispatch(__GetTodaymission());
  }, [dispatch]);
  // console.log(text)
  return (
    <>
    {loaded ?
      <div className="detail-wrap-shape">
        <div className="mission-name-and-tag-area">
          <div className="mission-name-text">{select.missionName}</div>
          <div className="mission-tag-text">#Mission Tag</div>
          <p className="explain-mission-contents-text">
            {select.missionContent}
          </p>
        </div>

        <img className="mission-image-area" src={select.missionImageUrl}/>
        <button className="button-go-camera">
          <div className="button-go-camera-icon">
            <FiCamera />
          </div>
        </button>
      </div> : <div>loading</div>}
    </>
  );
};

export default Explain;
