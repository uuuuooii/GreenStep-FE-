import styled, { keyframes } from "styled-components";

const FadeOn = keyframes`
from{opacity:0}
to{opacity:1}
`;

export const MissionPage = styled.div`
  background-color: #fcfcfa;
  display: flex;
  flex-direction: column;
  animation-name: ${FadeOn};
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;

export const DailyMissionArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 0px 16px;
  background: white;
  margin: 20px 0;
`;
export const WeeklyMissionArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 0px 16px;
  background: white;
  margin: 20px 0;
`;
export const DailyTextArea = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: start;
`;
export const DailyText = styled.div`
  margin: 15px;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #50674c;
`;
export const DailyCardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;
