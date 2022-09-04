import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DailyBody, MissionPhoto, MissionText } from "./DailyMissionStyled";
//redux
import { __GetDailymission } from "../../../Redux/modules/mission";
import { useSelector, useDispatch } from "react-redux";

const DailyMission = ({ item }) => {
  //redux
  const mission = useSelector((state) => state.mission.daily);
  // console.log(mission);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__GetDailymission());
  }, [dispatch]);

  const navigate = useNavigate();
  return (
    <DailyBody onClick={() => navigate(`/missioncamera/${item.missionId}`)}>
      <MissionPhoto />
      <MissionText>{item.missionName}</MissionText>
    </DailyBody>
  );
};

export default DailyMission;
