import React from "react";
import ChallengeMission from "./Challenge/ChallengeMission";
import DailyMission from "./Daily/DailyMission";
import WeeklyMission from "./Weekly/WeeklyMission";

const Mission = () => {
  return (
    <>
      <ChallengeMission />
      <DailyMission />
      <WeeklyMission />
    </>
  );
};

export default Mission;
