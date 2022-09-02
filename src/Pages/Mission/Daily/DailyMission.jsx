import React from "react";
import { useNavigate } from "react-router-dom";
import { DailyBody,MissionPhoto,MissionText } from "./DailyMissionStyled";

const DailyMission = ({item}) => {
  const navigate = useNavigate()
  return (<DailyBody onClick={() => navigate(`/missioncamera/${item.missionId}`)} >
<MissionPhoto/>
<MissionText>{item.missionName}</MissionText>
  </DailyBody>
  );
};

export default DailyMission;
