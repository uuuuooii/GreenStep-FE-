import React from 'react';
import styled, { keyframes } from 'styled-components';

const FadeOn = keyframes`
0%{opacity:0;
    transform: translateY(50);
}
50%{opacity:1;
    transform: translateY(0);
}
100%{opacity:0}
`;

const PointDiv = styled.div`
  /* display: ${(props) => (props.point > 0 ? 'block' : 'none')}; */
  /* position: fixed;
  margin: 0 auto;
    left: 50%;
  bottom: 150px; */
  animation-name: ${FadeOn} ;
  ${(props) => (props.point ? FadeOn : null)};
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  z-index: 20;
`;
const PointText = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #b2e2ab;
`;

const Point = ({ point }) => {
  <PointDiv point={point}>
    <PointText>+{point}XPdasdasdsadas</PointText>
  </PointDiv>;
};

export default Point;
