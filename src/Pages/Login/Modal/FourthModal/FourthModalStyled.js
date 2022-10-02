import styled, { keyframes } from "styled-components";

const SlideRight = keyframes`
from{transform:translateX(300px)}
to{transform:translateX(0px)}
`;

export const ModalHeader = styled.div`
  position: relative;
  width: 100%;
  padding: 10px 0;
  justify-content: center;
  text-align: center;
  display: flex;
  background: rgba(255, 255, 255, 0.5);
  border-bottom: 2.5px solid rgba(218, 218, 218, 0.15);
`;

export const ButtonText = styled.div`
  position: absolute;
  left: 0;
  width: 32px;
  font-family: "AppleNeoR";
  font-size: 18px;
  margin: 3px 15px 2px 15px;
  color: #868686;
  &:hover {
    cursor: pointer;
  }
`;

export const TopText = styled.div`
  text-align: center;
  font-family: "AppleNeoR";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #50674c;
  margin: 2px auto;
`;

export const SelectBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  /* justify-content: center; */
  animation-name: ${SlideRight};
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: #fcfcfa;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TotalEmailArea = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

export const CheckMailArea = styled.div`
  display: flex;
  margin: 10px 0;
  &:hover {
    cursor: pointer;
  }
`;

export const CheckMailText = styled.div`
  font-family: "AppleNeoR";
  font-size: 14px;
  margin: 0 7px;
  color: ${(props) => props.color};
  color: #c3c2c2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EmailButton = styled.button`
  background: ${(props) => props.background};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
  font-family: "AppleNeoSB";
  font-size: 16px;
  border-radius: 3px;
  width: 110px;
  height: 33px;
  border: none;
  color: #fcfcfa;
  position: absolute;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
  }
`;

export const EmailStrong = styled.div`
  color: #50674c;
  font-family: "AppleNeoM";
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 10px 0;
`;

export const EmailP = styled.p`
  width: 100%;
  font-family: "AppleNeoR";
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #50674c;
`;

export const EmailButtonArea = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 87px;
  /* top: 40px; */
`;
