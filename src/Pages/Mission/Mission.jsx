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
import { __GetTodaymission } from "../../Redux/modules/mission";
import { useDispatch, useSelector } from "react-redux";

const Mission = () => {
  const { mission } = useSelector((state) => state.mission);
  console.log(mission);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__GetTodaymission());
  }, [dispatch]);

  const navigate = useNavigate();
  const MissionList = [
    {
      missionId: "Integer",
      missionPictogram: "String",
      missionName: "String",
      missionStatus: 1,
    },
    {
      missionId: "Integer",
      missionPictogram: "String",
      missionName: "String",
      missionStatus: 2,
    },
    {
      missionId: "Integer",
      missionPictogram: "String",
      missionName: "String",
      missionStatus: 0,
    },
    {
      missionId: "Integer",
      missionPictogram: "String",
      missionName: "String",
      missionStatus: 0,
    },
    {
      missionId: "Integer",
      missionPictogram: "String",
      missionName: "String",
      missionStatus: 0,
    },
    {
      missionId: "Integer",
      missionPictogram: "String",
      missionName: "String",
      missionStatus: 0,
    },
    {
      missionId: "Integer",
      missionPictogram: "String",
      missionName: "String",
      missionStatus: 0,
    },
    {
      missionId: "Integer",
      missionPictogram: "String",
      missionName: "String",
      missionStatus: 0,
    },
  ];
  return (
    <>
      <DailyChallenge />
      <DailyMissionArea>
        <DailyTextArea>
          <DailyText>데일리 미션</DailyText>
        </DailyTextArea>
        <DailyCardBox>
          {MissionList.map((item, index) =>
            item.missionStatus == 0 ? (
              <DailyMission key={item.missionId + index} item={item} />
            ) : item.missionStatus == 1 ? (
              <Waiting key={item.missionId + index} item={item} />
            ) : (
              <Completed key={item.missionId + index} item={item} />
            )
          )}
        </DailyCardBox>
      </DailyMissionArea>

      <WeeklyMissionArea>
        <DailyTextArea>
          <DailyText>위클리 미션</DailyText>
        </DailyTextArea>

        <DailyCardBox>
          {MissionList.map((item, index) =>
            item.missionStatus == 0 ? (
              <DailyMission key={item.missionId + index} item={item} />
            ) : item.missionStatus == 1 ? (
              <Waiting key={item.missionId + index} item={item} />
            ) : (
              <Completed key={item.missionId + index} item={item} />
            )
          )}
        </DailyCardBox>
        <Footer />
      </WeeklyMissionArea>
    </>
  );
};

export default Mission;
