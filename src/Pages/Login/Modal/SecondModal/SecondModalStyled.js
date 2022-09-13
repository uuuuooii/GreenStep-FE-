import styled, { keyframes } from 'styled-components';

const SlideRight = keyframes`
from{transform:translateX(300px)}
to{transform:translateX(0px)}
`;
const SlideLeft = keyframes`
from{transform:translateX(-300px)}
to{transform:translateX(0px)}
`;

export const ModalHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  text-align: center;
  display: flex;
  background-color: white;
`;

export const TopText = styled.div`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: #50674c;
  margin: 0 auto;
`;

export const SelectImg = styled.img`
  width: 100%;
  height: 100%;
  box-shadow: 1px 1px 0px rgba(134, 134, 134, 0.1);
  border-radius: 10px;
  outline: ${(props) =>
    props.check == props.select ? '2px solid #B2E2AB' : 'none'};
  &:hover {
    cursor: pointer;
  }
`;

export const ImgDiv = styled.div`
  width: 110px;
  height: 110px;
  margin: 13px;
`;

export const ImgArea = styled.div`
  width: 100%;
  font-size: 4px;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
export const SelectBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  animation-name: ${(props) => (!props.second ? SlideRight : SlideLeft)};
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  background-color: #fcfcfa;
`;
export const ButtonText = styled.div`
  /* margin: auto; */
  width: 32px;
  margin: 0 10px;
  color: #6de4c6;
  &:hover {
    cursor: pointer;
  }
`;
