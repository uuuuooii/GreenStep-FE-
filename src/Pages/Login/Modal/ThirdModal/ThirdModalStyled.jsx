import styled, { keyframes } from "styled-components";
import { HiPencil } from "react-icons/hi";

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
  justify-content: space-between;
  text-align: center;
  display: flex;
  background: rgba(255, 255, 255, 0.5);
  border-bottom: 2.5px solid rgba(218, 218, 218, 0.15);
`;
export const TopText = styled.div`
  font-family: "AppleNeoR";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #50674c;
  text-align: center;
  margin: 2px auto;
`;

export const ButtonText = styled.div`
  font-family: "AppleNeoR";
  font-size: 18px;
  margin: 3px 15px 2px 15px;
  color: #868686;
  &:hover {
    cursor: pointer;
  }
`;

export const SelectBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation-name: ${(props) => (props.third ? SlideLeft : SlideRight)};
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

export const ProfileImg = styled.img`
  object-fit: cover;
  width: 100px;
  height: 100px;
  margin-bottom: 40px;
  box-shadow: 0px 2.5px 4px #e6e6e4;
  border-radius: 10px;
`;
export const CenterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 144px;
`;

export const InputDiv = styled.div`
  width: 187px;
  height: 40px;
  display: flex;
  border: 2px solid ${(props) => props.color};
  margin: 5px 0;
  border-radius: 6px;
`;

export const TextInput = styled.input`
  width: 130px;
  height: 16px;
  outline: none;
  background-color: #fcfcfa;
  border-radius: 10px;
  border: none;
  padding: 12px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-family: "AppleNeoR";
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: ${(props) => props.color};
  }
`;

export const WarningDiv = styled.div`
  display: flex;
  justify-content: start;
`;

export const WarningText = styled.div`
  font-size: 6px;
  color: ${(props) => (props.color ? props.color : "#C3C2C2")};
  width: 100%;
`;
export const ErrorText = styled.div`
  font-size: 6px;
  color: ${(props) => (props.color ? props.color : "#E1756E ")};
  width: 100%;
`;

export const ProfileArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  justify-content: center;
  align-items: center;
`;
export const TargetDiv = styled.div`
  height: 1px;
`;
export const PencilDiv = styled.div`
  width: 36px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const PencilIcon = styled(HiPencil)`
  font-size: 24px;
  margin-right: 5px;
  color: ${(props) => props.color};
`;
