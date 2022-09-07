import React from 'react';
import { DailyBody, MissionPhoto, MissionText } from './SkeletonStyled';

const DailySkeleton = () => {

  return(  <DailyBody>
    <MissionPhoto />
    <MissionText></MissionText>
  </DailyBody>);
};
export default DailySkeleton;
