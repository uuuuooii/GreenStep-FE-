import React from 'react';
import {
  ChallengeBody,
  ChallengeBox,
  ChallengePhoto,
} from './SkeletonStyled';

const ChallengeSkeleton = () => {
  return <ChallengeBox>
    <ChallengeBody>
        <ChallengePhoto/>
    </ChallengeBody>
  </ChallengeBox>;
};
export default ChallengeSkeleton;
