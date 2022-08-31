import React from 'react';
import {
  MedalArea,
  MedalHead,
  MedalCenter,
  MedalBottomArea,
  MedalLeftBottom,
  MedalRightBottom,
  MedalSetArea,
} from './FeedStyled';

const Medal = ({ num }) => {
  const outColor = ['#ffc72d', '#E7E7E7', '#D5936F;'];
  const centerColor = ['#FFE49C', '#FFFFFF;', '#FFE49C;'];
  return (
    <MedalSetArea>
      <MedalArea>
        <MedalHead color={outColor[num]}>
          <MedalCenter color={centerColor[num]} />
        </MedalHead>

        <MedalBottomArea>
          <MedalLeftBottom />
          <MedalRightBottom />
        </MedalBottomArea>
      </MedalArea>
    </MedalSetArea>
  );
};
export default Medal;
