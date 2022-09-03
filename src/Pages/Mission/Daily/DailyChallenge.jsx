//react import
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//redux
import { __GetTodaymission } from '../../../Redux/modules/mission';
import { useDispatch, useSelector } from 'react-redux';
//styled import
import {
  ChallengeBox,
  ChallengeTextArea,
  ChallengeBody,
  ChallengePhoto,
  MissionText,
  ChallengeTitle,
  ChallengeTimer,
} from './DailyMissionStyled';

const DailyChallenge = ({ item }) => {
  const [hour, setHour] = useState(23 - new Date().getHours());
  const [minute, setMinute] = useState(59 - new Date().getMinutes());
  const [second, setSecond] = useState(59 - new Date().getSeconds());

  useEffect(() => {
    const id = setInterval(() => {
      setHour(23 - new Date().getHours());
      setMinute(59 - new Date().getMinutes());
      setSecond(59 - new Date().getSeconds());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const navigate = useNavigate();

  //redux
  const mission = useSelector((state) => state.mission.challenge[0]);
  // console.log(useSelector((state) => state));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__GetTodaymission());
  }, [dispatch]);
  // const missiondata = mission;

  // 값을 받기 전에 렌더링 되면서 없는 값을 실행하려고 하니까 에러가 남. 그래서 값을 받아올 때 까지 띄어주는 코드가 필요함.(삼항연산자)
  return (
    <>
      {mission ? (
        <ChallengeBox>
          <ChallengeTextArea>
            <ChallengeTitle>오늘의 챌린지 미션</ChallengeTitle>
            <ChallengeTimer>
              {' '}
              미션 완료 까지&nbsp;
              {hour < 10 ? '0' + hour : hour}:
              {minute < 10 ? '0' + minute : minute}:
              {second < 10 ? '0' + second : second}
            </ChallengeTimer>
          </ChallengeTextArea>
          <ChallengeBody
            onClick={() => navigate(`/explain/${mission.missionId}&challenge`)}
          >
            <ChallengePhoto src={mission.missionImageUrl} />
            <MissionText>{mission.missionName}</MissionText>
          </ChallengeBody>
        </ChallengeBox>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default DailyChallenge;
