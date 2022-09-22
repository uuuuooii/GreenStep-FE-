import React from 'react';
import { CardBody, ProfileBody, ProfilePhoto } from './SkeletonStyled';
const FeedSkeleton = () => {
  return (
    <CardBody>
      <ProfileBody>
        <ProfilePhoto />
      </ProfileBody>
    </CardBody>
  );
};

export default FeedSkeleton;
