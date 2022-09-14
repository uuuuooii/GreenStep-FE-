import styled, { keyframes } from 'styled-components';
import { HiPencil } from 'react-icons/hi';

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
  background-color: white;
`;
export const TopText = styled.div`
  text-align: center;
  margin: 0 auto;
  color: #036a6a;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
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
export const ButtonText = styled.div`
  color: #6de4c6;
  width: 32px;
  margin: 0 10px;
  &:hover {
    cursor: pointer;
  }
`;
export const ProfileImg = styled.img`
  object-fit: cover;
  width: 100px;
  height: 100px;
  margin-bottom: 52px;
  box-shadow: 1px 1px 0px rgba(134, 134, 134, 0.1);
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
  border: 2px solid #b2e2ab;
  border-radius: 10px;
  margin: 5px 0;
`;

export const TextInput = styled.input`
  width: 130px;
  height: 16px;
  outline: none;

  border-radius: 5px;
  border: none;
  padding: 12px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;

    color: #b2e2ab;
  }
`;
export const ProfileArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 166px;
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
  font-size: 18px;
  color: #b2e2ab;
`;
