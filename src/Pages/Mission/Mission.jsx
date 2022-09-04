//react import
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//componenes import
import Completed from "./Completed/Completed";
import DailyMission from "./Daily/DailyMission";
import Waiting from "./Waiting/Waiting";
import DailyChallenge from "./Daily/DailyChallenge";
import Footer from "../../Components/Footer/Footer";
//styled import
import {
  DailyMissionArea,
  DailyTextArea,
  DailyText,
  DailyCardBox,
  WeeklyMissionArea,
} from "./MissionStyled";
//redux
import {
  __GetWeeklymission,
  __GetDailymission,
} from "../../Redux/modules/mission";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Mission = () => {
  const [loading,setLoading] = useState(false)
  const missionWeekly = useSelector((state) => state.mission.weekly);
  const missionDaily = useSelector((state) => state.mission.daily);
console.log()
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true)
    dispatch(__GetWeeklymission());
    dispatch(__GetDailymission());
    setLoading(false)
  }, [dispatch]);
  const navigate = useNavigate();

  return (
    <>
      <DailyChallenge />
      <DailyMissionArea>
        <DailyTextArea>
          <DailyText>데일리 미션</DailyText>
        </DailyTextArea>
        <DailyCardBox>
          {!loading ? missionDaily.map((item, index) =>
            item.missionStatus === 0 ? (
              <DailyMission key={item.missionId + index} item={item} onClick={()=>navigate(`/explain/${item.missionId}&daily`)} type={"daily"} />
            ) : item.missionStatus === 1 ? (
              <Waiting key={item.missionId + index} item={item} type={"daily"} />
            ) : (
              <Completed key={item.missionId + index} item={item} type={"daily"}/>
            )
          ) : null}
        </DailyCardBox>
      </DailyMissionArea>

      <WeeklyMissionArea>
        <DailyTextArea>
          <DailyText>위클리 미션</DailyText>
        </DailyTextArea>

        <DailyCardBox>
          {!loading ? missionWeekly.map((item, index) => {
            return item.missionStatus === 0 ? (
              <DailyMission key={item.missionId + index} item={item} type={"weekly"} onClick={()=>navigate(`/explain/${item.missionId}&weekly`)} />
            ) : item.missionStatus === 1 ? (
              <Waiting key={item.missionId + index} item={item} type={"weekly"} />
            ) : (
              <Completed key={item.missionId + index} item={item} type={"weekly"}  />
            );
          }) : null}
        </DailyCardBox>
        <Footer />
      </WeeklyMissionArea>
    </>
  );
};

export default Mission;
