//react import
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//modules import
import {
  __GetWeeklymission,
  __GetDailymission,
  __GetTodaymission,
} from '../../Redux/modules/mission';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
//componenes import
import Completed from './Completed/Completed';
import DailyMission from './Daily/DailyMission';
import Waiting from './Waiting/Waiting';
import DailyChallenge from './Daily/DailyChallenge';
import Footer from '../../Components/Footer/Footer';
//styled import
import {
  DailyMissionArea,
  DailyTextArea,
  DailyText,
  DailyCardBox,
  WeeklyMissionArea,
} from './MissionStyled';

const Mission = () => {
  const [loading, setLoading] = useState(false);
  const missionWeekly = useSelector((state) => state.mission.weekly);
  const missionDaily = useSelector((state) => state.mission.daily);
  const missionChallenge = useSelector((state) =>state.mission.challenge);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    dispatch(__GetWeeklymission());
    dispatch(__GetDailymission());
    dispatch(__GetTodaymission());
    setLoading(false);
  }, [dispatch]);
  const navigate = useNavigate();
console.log(missionDaily)
console.log(missionWeekly)
  return (
    <>
      {!loading ? (
        <>
          {missionChallenge ? <DailyChallenge mission={missionChallenge[0]} /> :null }
          <DailyMissionArea>
            <DailyTextArea>
              <DailyText>데일리 미션</DailyText>
            </DailyTextArea>
            <DailyCardBox>
              {!loading && missionDaily
                ? missionDaily.map((item, index) =>
                    item.status === 'DEFAULT' ? (
                      <DailyMission
                        key={item.missionId + index}
                        item={item}
                        onClick={() =>
                          navigate(`/explain/${item.missionId}&daily`)
                        }
                        type={'daily'}
                      />
                    ) : item.status === 'WAITING' ? (
                      <Waiting
                        key={item.missionId + index}
                        item={item}
                        type={'daily'}
                      />
                    ) : (
                      <Completed
                        key={item.missionId + index}
                        item={item}
                        type={'daily'}
                      />
                    )
                  )
                : null}
            </DailyCardBox>
          </DailyMissionArea>
          <WeeklyMissionArea>
            <DailyTextArea>
              <DailyText>위클리 미션</DailyText>
            </DailyTextArea>

            <DailyCardBox>
              {(!loading && missionDaily)
                ? missionWeekly.map((item, index) => {
                    return item.status === 'DEFAULT' ? (
                      <DailyMission
                        key={item.missionId + index}
                        item={item}
                        type={'weekly'}
                        onClick={() =>
                          navigate(`/explain/${item.missionId}&weekly`)
                        }
                      />
                    ) : item.status === 'WAITING' ? (
                      <Waiting
                        key={item.missionId + index}
                        item={item}
                        type={'weekly'}
                      />
                    ) : (
                      <Completed
                        key={item.missionId + index}
                        item={item}
                        type={'weekly'}
                      />
                    );
                  })
                : null}
            </DailyCardBox>
            <Footer />
          </WeeklyMissionArea>{' '}
        </>
      ) : null}
    </>
  );
};

export default Mission;
