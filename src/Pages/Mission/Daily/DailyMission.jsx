//react import
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DailyBody, MissionPhoto, MissionText } from './DailyMissionStyled';
//redux
import { __GetDailymission } from '../../../Redux/modules/mission';

const DailyMission = ({ item, type }) => {
  const navigate = useNavigate();
  return (
    <DailyBody
      onClick={() =>
        type == 'daily'
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
