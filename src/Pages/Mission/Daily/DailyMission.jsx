import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DailyBody, MissionPhoto, MissionText } from "./DailyMissionStyled";
//redux
import { __GetDailymission } from "../../../Redux/modules/mission";
import { useDispatch } from "react-redux";

const DailyMission = ({ item }) => {
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
