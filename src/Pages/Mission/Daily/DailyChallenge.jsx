import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  return (
    <ChallengeBox>
      <ChallengeTextArea>
        <ChallengeTitle>오늘의 챌린지 미션</ChallengeTitle>
        <ChallengeTimer>
          {' '}
          미션 완료 까지&nbsp;
          {hour < 10 ? '0' + hour : hour}:{minute < 10 ? '0' + minute : minute}:
          {second < 10 ? '0' + second : second}
        </ChallengeTimer>
      </ChallengeTextArea>
      <ChallengeBody>
        <ChallengePhoto />
        <MissionText>Mission Name</MissionText>
      </ChallengeBody>
    </ChallengeBox>
  );
};

export default DailyChallenge;
