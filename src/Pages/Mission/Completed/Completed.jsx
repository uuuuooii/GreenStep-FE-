// react import
import React from 'react';
import { useNavigate } from 'react-router-dom';
// styled import
import {
  DailyBody,
  MissionPhoto,
  MissionText,
  CompletedBody,
  LeapDiv,
  CompletedInBody,
} from './CompletedStyled';
import MissionLeap from '../../../static/components/MissionLeap';

const Completed = ({ item }) => {
  const navigate = useNavigate();
  return (
    <DailyBody>
      <CompletedBody>
        <CompletedInBody>
          <LeapDiv>
            <MissionLeap />
          </LeapDiv>
        </CompletedInBody>
      </CompletedBody>
      <MissionPhoto img={item.missionImageUrl} />
      <MissionText>{item.missionName}</MissionText>
    </DailyBody>
  );
};

export default Completed;
