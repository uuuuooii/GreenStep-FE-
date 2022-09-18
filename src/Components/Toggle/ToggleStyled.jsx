import styled, { keyframes } from 'styled-components';

export const ToggleOn = keyframes`
from{transform:translateX(0)}
to{transform:translateX(65%)}
`;
export const ToggleOff = keyframes`
from{transform:translateX(65%)}
to{transform:translateX(0)}
`;

export const ToggleButton = styled.div`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 10px;
  margin: 2px 3px;
  animation-name: ${(props)=>props.click&&props.check ?ToggleOn : props.click&&!props.check ? ToggleOff : null };
  animation-duration: 0.3s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;

export const ToggleBase = styled.div`
  width: 40px;
  height: 25px;
  border-radius: 25px;
  background-color: ${(props) =>
    props.background ? props.background : '#d9d9d9'};
  transition: all 0.5s;
  display: flex;
`;
