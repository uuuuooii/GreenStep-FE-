import styled, { keyframes } from 'styled-components';


const SlideLeft = keyframes`
from{transform:translateX(-300px)}
to{transform:translateX(0px)}
`;
const FadeOn = keyframes`
from{opacity:0}
to{opacity:1}
`
export const FirstModalBody = styled.div`
  display: ${(props) => (props.display === 1 ? 'block' : 'none')};
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  max-height: 667px;
  max-width: 375px;
  margin: auto;
  background-color: white;
`;

export const FirstModalSection = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  margin: 0px auto 0px auto;
`;

export const ModalHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const TopText = styled.div`
  text-align: center;
  margin: auto;
  font-size: 20px;
`;

export const SelectBody = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: ${(props) => (!props.slide ? FadeOn : SlideLeft)};
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;
export const ImgArea = styled.div`
  width: 100%;
  height: 100%;
  font-size: 4px;
`;
export const SelectImg = styled.img`
  width: 100px;
  height: 100px;
  box-shadow: 1px 1px 0px rgba(134, 134, 134, 0.1);
  border-radius: 10px;
  outline: ${(props) =>
    props.num === props.check ? '2px solid #B2E2AB' : 'none'};
  &:hover {
    cursor: pointer;
  }
`;

export const ImgDiv = styled.div`
  margin: 249px 40px 359px 40px;
`;

export const SeleceArea = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
`;

export const ButtonText = styled.div`
  width: 32px;
  margin: 0 10px;
  color: #6de4c6;
  &:hover {
    cursor: pointer;
  }
`;
export const DummyText = styled.div`
  width: 32px;
  margin: 0 10px;
`;
export const SelectText = styled.div`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: #2b5139;
  font-size: 6px;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
