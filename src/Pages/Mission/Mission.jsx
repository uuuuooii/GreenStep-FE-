import React from "react";
import ChallengeMission from "./Challenge/ChallengeMission";
import Completed from "./Completed";
import DailyMission from "./Daily/DailyMission";
import Waiting from "./Waiting";
import WeeklyMission from "./Weekly/WeeklyMission";

const Mission = () => {
  const a = 0;
  const MissionList = [
    {
      missionId: "Integer",
      missionPictogram: "String",
      missionName: "String",
      missionStatus: 3,
    },
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
  ];
  console.log(MissionList[0].missionStatus);
  return (
    <>
      <ChallengeMission />
      <DailyMission />
      {MissionList.map((item) =>
        item.missionStatus === 0 ? (
          <DailyMission />
        ) : item.missionStatus === 1 ? (
          <Waiting />
        ) : (
          <Completed />
        )
      )}
      <WeeklyMission />
    </>
  );
};

export default Mission;
