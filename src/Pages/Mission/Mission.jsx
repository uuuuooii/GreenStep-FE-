import React from "react";
import { useNavigate } from "react-router-dom";
import ChallengeMission from "./Challenge/ChallengeMission";
import Completed from "./Completed";
import DailyMission from "./Daily/DailyMission";
import Waiting from "./Waiting";
import WeeklyMission from "./Weekly/WeeklyMission";
import "./Daily/DailyMission.css";
const Mission = () => {
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
  ];
  return (
    <>
      <ChallengeMission />
      {/* <DailyMission /> */}
      <div className="dailyMissionBox">
        <div className="dailyTitle">데일리 미션</div>

        <div className="flex">
          {MissionList.map((item) =>
            item.missionStatus == 0 ? (
              <div
                className="dailyMission"
                onClick={() => navigate(`/missioncamera/${item.missionId}`)}
              >
                <p className="dailyMissionName">{item.missionName}</p>
                <div className="dailyMiniBox" />
              </div>
            ) : item.missionStatus == 1 ? (
              <div className="WaitingMission">
                <div>
                  <div className="WaitingMiniBox">
                    <p className="Waitingtext">인증 대기중</p>
                  </div>
                  <p className="WaitingMissionName">{item.missionName}</p>
                </div>
              </div>
            ) : (
              <div>
                <div className="CompleteMission">
                  <div>
                    <div className="CompleteMiniBox">
                      <p className="Completetext">인증 완료!</p>
                      <button onClick={() => navigate("/feed")}>
                        피드에 올리기
                      </button>
                    </div>
                    <p className="CompleteMissionName">{item.missionName}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <WeeklyMission />
    </>
  );
};

export default Mission;

// {MissionList.map((item) =>
//   item.missionStatus === 0 ? (
//     <div className="dailyMissionBox">
//     <div className="dailyTitle">데일리 미션</div>

//     <div className="flex">

//       <div className="dailyMission">
//         <p className="dailyMissionName">Misson Name</p>
//         <div className="dailyMiniBox" />

//       </div>
//     </div>
//   </div>
//   ) : item.missionStatus === 1 ? (
//     <Waiting />
//   ) : (
//     <Completed />
//   )
// )}
