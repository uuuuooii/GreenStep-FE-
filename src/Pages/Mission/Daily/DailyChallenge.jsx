//react import
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//redux
import { __GetTodaymission } from "../../../Redux/modules/mission";
import { useDispatch, useSelector } from "react-redux";
//styled import
import {
  ChallengeBox,
  ChallengeTextArea,
  ChallengeBody,
  ChallengePhoto,
  MissionText,
  ChallengeTitle,
  ChallengeTimer,
} from "./DailyMissionStyled";

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
  const mission = useSelector((state) => state.mission.mission[0]);
  // console.log(mission);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__GetTodaymission());
  }, [dispatch]);
  // const missiondata = mission;

  return (
    <ChallengeBox>
      <ChallengeTextArea>
        <ChallengeTitle>오늘의 챌린지 미션</ChallengeTitle>
        <ChallengeTimer>
          {" "}
          미션 완료 까지&nbsp;
          {hour < 10 ? "0" + hour : hour}:{minute < 10 ? "0" + minute : minute}:
          {second < 10 ? "0" + second : second}
        </ChallengeTimer>
      </ChallengeTextArea>
      <ChallengeBody
        onClick={() => navigate(`/missioncamera/${mission.missionId}`)}
      >
        {mission ? (
          <ChallengePhoto src={mission.missionImageUrl} />
        ) : (
          <ChallengeTimer />
        )}

        {/* <MissionText>{mission.missionName}</MissionText> */}
      </ChallengeBody>
    </ChallengeBox>
  );
};

export default DailyChallenge;
