import React from 'react';
import {
  DailyBody,
  MissionPhoto,
  MissionText,
  WatingBody,
} from './WatingStyled';

const Wating = ({ item }) => {
  return (
    <DailyBody onClick={() => navigate(`/explain/${item.missionId}&daily`)}>
      <WatingBody>인증 대기중</WatingBody>
      <MissionPhoto src={item.missionImageUrl} />
      <MissionText>{item.missionName}</MissionText>
    </DailyBody>
  );
};

export default Wating;
