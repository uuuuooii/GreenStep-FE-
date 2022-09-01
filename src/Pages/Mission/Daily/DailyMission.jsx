import React from "react";
import "./DailyMission.css";

const DailyMission = () => {
  // const dailyMission = [
  //   {
  //     missionId: 0,
  //     missionPictogram: String,
  //     missionName: String,
  //   },
  //   {
  //     missionId: 0,
  //     missionPictogram: String,
  //     missionName: String,
  //   },
  //   {
  //     missionId: 0,
  //     missionPictogram: String,
  //     missionName: String,
  //   },
  // ];
  return (
    <>
      <div className="dailyMissionBox">
        <div className="dailyTitle">데일리 미션</div>

        <div className="flex">
          <div className="dailyMission">
            <p className="dailyMissionName">Misson Name</p>
            <div className="dailyMiniBox" />
          </div>
          <div className="dailyMission">
            <p className="dailyMissionName">Misson Name</p>
            <div className="dailyMiniBox" />
          </div>
          <div className="dailyMission">
            <p className="dailyMissionName">Misson Name</p>
            <div className="dailyMiniBox" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DailyMission;
