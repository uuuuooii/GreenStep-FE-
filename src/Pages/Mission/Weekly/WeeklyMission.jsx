import React from "react";
import "./WeeklyMission.css";

const WeeklyMission = () => {
  return (
    <>
      <div>
        <div>
          <div className="WeeklyMissionBox">
            <div className="WeeklyTitle">위클리 미션</div>
            <div className="WeeklyMission">
              <p className="WeeklyMissionName">Misson Name</p>
              <div className="WeeklyMiniBox" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeeklyMission;
