import styled, { keyframes } from "styled-components";
export const ModalBody = styled.div`
  position: fixed;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  /* max-height: 667px; */
  /* max-width: 375px; */
  max-width: 100%;
  margin: auto;
  background-color: #fcfcfa;
`;

export const ModalSection = styled.div`
  width: 100%;
  height: 90%;
  background-color: FCFCFA;
  margin: 0px auto 0px auto;
  position: relative;
`;

export const DotArea = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 135px;
  z-index: 1000;
  background-color: #fcfcfa;
`;
export const TransX = keyframes`
from{transform: scaleX(0.2)}
to{transform: scaleX(1)}
`;
export const SlideLeft = keyframes`
0%{transform: translateX(37.5px)}
80%{transform: translateX(-5px)}
100%{transform: translateX(0)}
`;
export const SlideRight = keyframes`
0%{transform: translateX(-37.5px)}
80%{transform: translateX(5px)}
100%{transform: translateX(0)}
`;

export const SlideLeftDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: ${SlideLeft};
  animation-duration: 0.35s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;

export const SlideRightDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: ${SlideRight};
  animation-duration: 0.35s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;
