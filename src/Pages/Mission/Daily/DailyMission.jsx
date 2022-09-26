import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DailyBody, MissionPhoto, MissionText } from "./DailyMissionStyled";
//redux
import { __GetDailymission } from "../../../Redux/modules/mission";
import { useDispatch } from "react-redux";

const DailyMission = ({ item, type }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__GetDailymission());
  }, [dispatch]);

  const navigate = useNavigate();
  return (
    <DailyBody
      onClick={() =>
        type == "daily"
          ? navigate(`/explain/${item.missionId}&daily`)
          : navigate(`/explain/${item.missionId}&weekly`)
      }
    >
      <MissionPhoto src={item.missionIconUrl} />
      <MissionText>{item.missionName}</MissionText>
    </DailyBody>
  );
};

export default DailyMission;
