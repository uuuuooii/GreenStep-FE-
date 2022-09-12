import styled, { keyframes } from 'styled-components';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const SlideRight = keyframes`
from{transform:translateX(300px)}
to{transform:translateX(0px)}
`;


export const ThirdModalBody = styled.div`
  display: ${(props) => (props.display == 3 ? 'block' : 'none')};
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

export const ThirdModalSection = styled.div`
  width: 100%;
  height: 90%;
  background-color: white;
  margin: 0px auto 0px auto;

`;

export const ModalHeader = styled.div`
  position: relative;
  width: 100%;
  padding: 10px 0;
  justify-content: center;
  text-align: center;
  display: flex;
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
  animation-name: ${SlideRight};
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-top: 166px;

  &::-webkit-scrollbar{
    display: none;
  }
`;
export const ButtonText = styled.div`
  color: #6de4c6;
  position: absolute;
  left: 0;
  /* margin: auto; */
  width: 32px;
  margin: 0 10px;
  &:hover {
    cursor: pointer;
  }
`;
export const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  margin: 15px 0;
  box-shadow: 1px 1px 0px rgba(134, 134, 134, 0.1);
`;
export const CenterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 156px 16px 277px 16px;
`;

export const TextInput = styled.input`
  width: 230px;
  height: 40px;
  margin: 15px 0;
  outline: none;
  border-radius: 5px;
  border: 1px solid #34bea7;
  padding: 0 10px;
  &:focus {
    outline: 0.5px solid #34bea7;
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
`
export const TotalEmailArea = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  margin-top: 268px;
`;

export const CheckMailArea = styled.div`
  display: flex;
  margin: 10px 0;
  &:hover {
    cursor: pointer;
  }
`;
export const CheckMailIcon = styled(AiOutlineCheckCircle)`
  color: ${(props) => (props.color ? props.color : 'black')};
  background-color: ${(props) =>
    props.background ? props.background : 'white'};
  width: 20px;
  height: 20px;
  transition: all 0.5s;
  border-radius: 10px;
`;

export const CheckMailText = styled.div`
  font-size: 14px;
  margin: 0 10px;
  color: #34bea7;
`;
export const EmailButton = styled.button`
  background: #B8DDE2;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  width: 110px;
  height: 33px;
  border: none;
  color: white;
  position: absolute;
  &:hover {
    cursor: pointer;
  }
`;
export const EmailStrong = styled.div`
  color: #036a6a;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 10px 0;
`;
export const EmailP = styled.p`
  width: 90%;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #036a6a;
`;
export const EmailButtonArea = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 87px;
  /* top: 40px; */
`;
export const TargetDiv = styled.div`
  height: 1px;
`