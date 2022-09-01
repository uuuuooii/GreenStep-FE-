import React from 'react';
import { RankingBody, MedalBox, UserProfile, RankTitle,TitleArea } from './SkeletonStyled';
const RankingSkeleton = () => {
  return (
<RankingBody>
    <TitleArea>
<RankTitle/>
</TitleArea>
    <MedalBox>

        <UserProfile/>
        <UserProfile/>
        <UserProfile/>
    </MedalBox>
</RankingBody>
  );
};

export default RankingSkeleton;