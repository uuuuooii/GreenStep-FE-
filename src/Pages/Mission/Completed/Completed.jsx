// react import
import React from 'react';
import { useNavigate } from 'react-router-dom';
// styled import
import {
  DailyBody,
  MissionPhoto,
  MissionText,
  CompletedBody,
  FeedButton,
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
          <FeedButton onClick={() => navigate(`/upload/${item.missionId}`)}>
            피드올리기
          </FeedButton>
        </CompletedInBody>
      </CompletedBody>
      <MissionPhoto img={item.missionImageUrl} />
      <MissionText>{item.missionName}</MissionText>
      <MissionText>테스트</MissionText>
    </DailyBody>
  );
};

export default Completed;
