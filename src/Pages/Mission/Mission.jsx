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
import ChallengeSkeleton from '../../Components/Skeleton/ChallengeSkeleton';
import DailySkeleton from '../../Components/Skeleton/DailySkeleton';
//styled import
import {
  DailyMissionArea,
  DailyTextArea,
  DailyText,
  DailyCardBox,
  WeeklyMissionArea,
} from './MissionStyled';
import Slide from 'react-reveal/Slide';

const Mission = () => {
  const [loading, setLoading] = useState(false);
  const missionWeekly = useSelector((state) => state.mission.weekly);
  const missionDaily = useSelector((state) => state.mission.daily);
  const missionChallenge = useSelector((state) => state.mission.challenge);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    dispatch(__GetWeeklymission());
    dispatch(__GetDailymission());
    dispatch(__GetTodaymission());
    setLoading(false);
  }, [2000]);
  const navigate = useNavigate();

  return (
    <>
      <Slide right>
        <>
          {!loading && missionChallenge ? (
            <DailyChallenge mission={missionChallenge[0]} />
          ) : (
            <ChallengeSkeleton />
          )}
          
          <DailyMissionArea>
            <DailyTextArea>
              <DailyText>데일리 미션</DailyText>
            </DailyTextArea>
            <DailyCardBox>
              {!loading && missionDaily ? (
                missionDaily.map((item, index) =>
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
                      onClick={() =>
                        navigate(`/explain/${item.missionId}&daily`)
                      }
                    />
                  ) : (
                    <Completed
                      key={item.missionId + index}
                      item={item}
                      type={'daily'}
                    />
                  )
                )
              ) : (
                <>
                  {' '}
                  <DailySkeleton />
                  <DailySkeleton />
                  <DailySkeleton />
                  <DailySkeleton />
                  
                </>
              )}
            </DailyCardBox>
          </DailyMissionArea>
          <WeeklyMissionArea>
            <DailyTextArea>
              <DailyText>위클리 미션</DailyText>
            </DailyTextArea>
            <DailyCardBox>
              {!loading && missionWeekly ? (
                missionWeekly.map((item, index) => {
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
                      onClick={() =>
                        navigate(`/explain/${item.missionId}&weekly`)
                      }
                    />
                  ) : (
                    <Completed
                      key={item.missionId + index}
                      item={item}
                      type={'weekly'}
                    />
                  );
                })
              ) : (
                <>
                  <DailySkeleton />
                  <DailySkeleton />
                  <DailySkeleton />
                  <DailySkeleton />
                </>
              )}
            </DailyCardBox>
          </WeeklyMissionArea>{' '}
        </>
      </Slide>
      <Footer />
    </>
  );
};

export default Mission;
