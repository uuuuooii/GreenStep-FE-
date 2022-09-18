import styled, { keyframe } from 'styled-components';

export const ToggleButton = styled.div`
width: 20px;
height:20px;
background-color: white;
border-radius: 10px;
margin: 2px 3px;
`

export const ToggleBase = styled.div`
  width: 40px;
  height: 25px;
  border-radius: 25px;
  background-color: ${(props) => props.background};
  transition: all 0.5s;
`;
