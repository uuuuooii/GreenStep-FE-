import React from "react";
import "./DailyMission.css";

const DailyMission = () => {
  return (
    <>
      <div>
        <div>
          <div className="dailyMissionBox">
            <div className="dailyTitle">데일리 미션</div>
            <div className="dailyMission">
              <p className="dailyMissionName">Misson Name</p>
              <div className="dailyMiniBox" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DailyMission;
