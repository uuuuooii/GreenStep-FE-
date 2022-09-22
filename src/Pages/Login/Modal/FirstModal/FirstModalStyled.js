import styled, { keyframes } from "styled-components";

const SlideLeft = keyframes`
from{transform:translateX(-300px)}
to{transform:translateX(0px)}
`;
const FadeOn = keyframes`
from{opacity:0}
to{opacity:1}
`;

export const ModalHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  text-align: center;
  display: flex;
  justify-content: center;
  background: rgba(255, 255, 255, 0.5);
  border-bottom: 2.5px solid rgba(218, 218, 218, 0.15);
`;

export const TopText = styled.div`
  text-align: center;
  margin: 4px auto 5px auto;
  font-family: "AppleNeoR";
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #50674c;
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
  background-color: #fcfcfa;
`;
export const ImgArea = styled.div`
  width: 100%;
  height: 100%;
  font-size: 4px;
`;
export const SelectImg = styled.img`
  object-fit: cover;
  width: 100px;
  height: 100px;
  box-shadow: 0px 2.5px 4px #e6e6e4;
  border-radius: 10px;
  /* -moz-outline-radius : 10px; */
  outline: ${(props) =>
    props.num === props.check ? "2px solid #B2E2AB" : "none"};
  &:hover {
    cursor: pointer;
  }
`;

export const ImgDiv = styled.div`
  margin: 0 12.5px;
`;

export const SeleceArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 200px 0 350px 0;
`;

export const ButtonText = styled.div`
  width: 32px;
  margin: 0 10px;
  color: #868686;
  &:hover {
    cursor: pointer;
  }
`;
export const DummyText = styled.div`
  width: 32px;
  margin: 0 10px;
`;
export const SelectText = styled.div`
  font-family: "AppleNeoM";
  font-size: 13px;
  line-height: 16px;
  color: #2b5139;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
