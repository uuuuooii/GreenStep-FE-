//react import
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//redux import
import { __GetTodaymission } from "../../../Redux/modules/mission";
//styled import
import {
  ChallengeBox,
  ChallengeTextArea,
  ChallengeBody,
  ChallengePhoto,
  MissionText,
  WatingText,
  ChallengeTitle,
  ChallengeTimer,
  ChallengeWaiting,
  ChallengeMissionText,
  LeapDiv,
} from "./DailyMissionStyled";
//component import
import ChallengeSkeleton from "../../../Components/Skeleton/ChallengeSkeleton";
import MissionLeap from "../../../static/components/MissionLeap";

const DailyChallenge = ({ mission }) => {
  const [hour, setHour] = useState(23 - new Date().getHours());
  const [minute, setMinute] = useState(59 - new Date().getMinutes());
  const [second, setSecond] = useState(59 - new Date().getSeconds());

  console.log(mission);
  useEffect(() => {
    const id = setInterval(() => {
      setHour(23 - new Date().getHours());
      setMinute(59 - new Date().getMinutes());
      setSecond(59 - new Date().getSeconds());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const navigate = useNavigate();
  // 값을 받기 전에 렌더링 되면서 없는 값을 실행하려고 하니까 에러가 남. 그래서 값을 받아올 때 까지 띄어주는 코드가 필요함.(삼항연산자)
  return (
    <>
      {mission ? (
        <ChallengeBox>
          <ChallengeTextArea>
            <ChallengeTitle>챌린지 미션</ChallengeTitle>
            <ChallengeMissionText title={mission.missionName}>
              {mission.missionName}
            </ChallengeMissionText>
            <ChallengeTimer>
              미션 완료까지&nbsp;&nbsp;
              {hour < 10 ? "0" + hour : hour}:
              {minute < 10 ? "0" + minute : minute}:
              {second < 10 ? "0" + second : second}
            </ChallengeTimer>
          </ChallengeTextArea>
          <ChallengeBody
            onClick={() => navigate(`/explain/${mission.missionId}&challenge`)}
          >
            {mission.status === "WATING" ? (
              <ChallengeWaiting>
                <WatingText>인증 대기중</WatingText>
              </ChallengeWaiting>
            ) : mission.status === "DONE" ? (
              <ChallengeWaiting>
                <LeapDiv>
                  <MissionLeap />
                </LeapDiv>
              </ChallengeWaiting>
            ) : null}

            <ChallengePhoto src={mission.missionIconUrl} />
          </ChallengeBody>
        </ChallengeBox>
      ) : (
        <ChallengeSkeleton />
      )}
    </>
  );
};

export default DailyChallenge;
