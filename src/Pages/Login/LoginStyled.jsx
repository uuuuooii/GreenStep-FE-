import styled from "styled-components";
import { RiKakaoTalkFill } from "react-icons/ri";
import { AiOutlineArrowDown } from "react-icons/ai";
import logo from "./kakao_login_medium_wide.png";
import {
  LogoFade,
  FadeBottomOn,
  FadeBottomOnImage,
} from "../../Components/Animation/Animation";
export const LoginPageArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;
export const LoginBody = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
`;

export const ButtonBody = styled.div`
  width: 250px;
  display: flex;
  text-align: center;
  position: relative;
  padding: 5px;
`;
export const LogoGraDiv = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
  background: linear-gradient(#daf2d5, #fcfcfa);
  position: absolute;
  animation-name: ${LogoFade};
  animation-duration: 2.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: none;
  object-fit: cover;
  overflow-x: hidden;
`;
export const KakaoLink = styled.a`
  text-decoration: none;
  /* color: black; */
  height: 50px;
  margin-bottom: 100px;
`;
export const LDiv = styled.div`
  position: absolute;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);
  z-index: 15;
  overflow: hidden;
`;
export const MarginDIv = styled.div`
  padding-bottom: 60px;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: column;
`;
export const Logo = styled.img.attrs({
  src: `${logo}`,
})`
  width: 250px;
  /* margin: 3100px 62px 63px 62px; */
`;
export const BlurDiv = styled.div`
  position: absolute;
`;
export const FirstArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
export const FirstTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 148%;
  display: flex;
  align-items: center;
  text-align: center;
  z-index: 2000;
  margin: 0 23px;
  animation-name: ${(props) => props.animation};
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  color: rgba(80, 103, 76, 0.5);
  opacity: 0;
`;
export const FirstImgDiv = styled.div`
  position: relative;
  width: 366px;
  height: 286px;
`;
export const FirstImg = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.5;
  animation-name: ${(props) => props.animation};
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;

export const SecondArea = styled.div`
  height: 100vh;
  /* border: 1px solid black; */
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`;
export const SecondImgDiv = styled.div`
  position: relative;
  width: 366px;
  height: 286px;
`;
export const SecondImg = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.5;
  animation-name: ${(props) => props.animation};
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  opacity: 0.5;
  overflow: hidden;
`;
export const ThirdArea = styled.div`
  height: 100vh;
  /* border: 1px solid black; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`;
export const FourthArea = styled.div`
  height: 100vh;
  /* border: 1px solid black; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`;
export const LogoArea = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`;

export const FirstCoverDiv = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 130px;
  height: 282px;
  z-index: 5;
  transform: translate(20%, -20%);
`;
export const SecondCoverDiv = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 130px;
  height: 282px;
  z-index: 5;
  transform: translate(-20%, -20%);
`;
export const FirstCover = styled.img`
  /* width: 100%; */
  height: 100%;
  animation-name: ${(props) => props.animation};
  animation-duration: 2s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  opacity: 0;
`;
export const FirstText = styled.div`
  opacity: 0;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 148%;
  color: #50674c;
  margin: 20px 0;
  text-align: center;
  white-space: pre-wrap;
  animation-name: ${(props) => props.animation};
  animation-duration: 3s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;
export const SecondRefDiv = styled.div`
  height: 1px;
`;
export const SecondText = styled.div`
  opacity: 0;
  width: 100%;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 148%;
  color: #50674c;
  margin: 20px 0;
  text-align: center;
  white-space: pre-wrap;
  animation-name: ${(props) => props.animation};
  animation-duration: 3s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;
export const ThirdText = styled.div`
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #84ca79;

  max-width: 300px;
  white-space: pre-wrap;
`;
export const FourthText = styled.div`
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  white-space: pre-wrap;
  max-width: 300px;
  text-align: center;
  color: #84ca79;
`;
export const LastText = styled.div`
  opacity: 0;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: ${(props)=>props.bold ? props.bold : 500};
  font-size: 25px;
  line-height: 48px;
  text-align: center;
  color: #50674c;
  animation-name: ${(props) => props.animation};
  animation-duration: ${(props) => props.time};
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;
export const DownButton = styled.div`
  position: fixed;
  border-radius: 10px;
  right: 20px;
  bottom: 90px;
  width: 40px;
  height: 40px;
  background-color: #84ca79;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
  &:hover{
    cursor: pointer;
  }
`;
export const DownArrow = styled(AiOutlineArrowDown)`
  font-size: 28px;
  color: #fcfcfa;
`;

export const Introduce = styled.div``;
