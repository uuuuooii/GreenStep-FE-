import styled from 'styled-components';
import { RiKakaoTalkFill } from 'react-icons/ri';
import logo from './kakao_login_medium_wide.png';
import {
  LogoFade,
  FadeBottomOn,
  FadeBottomOnImage,
} from '../../Components/Animation/Animation';

export const LoginBody = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonBody = styled.div`
  width: 250px;
  display: flex;
  text-align: center;
  position: relative;
  padding: 5px;

  /* margin: 3100px 62px 63px 62px; */
  /* padding: 60px 0; */
`;
export const LogoGraDiv = styled.div`
  /* background-color: #daf2d5; */
  width: 250px;
  height: 250px;
  /* border-radius: 150px; */
  position: absolute;
  animation-name: ${LogoFade};
  animation-duration: 1.2s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;
export const KakaoLink = styled.a`
  text-decoration: none;
  /* color: black; */
  height: 50px;
  margin-bottom: 100px;
`;
export const LDiv = styled.div`
  /* position: absolute; */
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  /* top: 286px; */

  /* margin: 286px 80px 2700px 80px; */
  z-index: 999;
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
`;
export const ThirdArea = styled.div`
  height: 100vh;
  /* border: 1px solid black; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const FourthArea = styled.div`
  height: 100vh;
  /* border: 1px solid black; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const LogoArea = styled.div`
  height: 100vh;
  /* border: 1px solid black; */
  /* background-color: #DAF2D5; */
  width: 100%;
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
  z-index: 3000;
  transform: translate(20%, -20%);
`;
export const SecondCoverDiv = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 130px;
  height: 282px;
  z-index: 3000;
  transform: translate(-20%, -20%);
`;
export const FirstCover = styled.img`
  width: 100%;
  height: 100%;
  animation-name: ${(props) => props.animation};
  animation-duration: 2s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  /* opacity: 0; */
`;
export const FirstText = styled.div`
  opacity: 0;
  font-family: 'Apple SD Gothic Neo';
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
  font-family: 'Apple SD Gothic Neo';
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
  font-family: 'Apple SD Gothic Neo';
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
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  white-space: pre-wrap;
  max-width: 300px;
  text-align: center;
  color: #84ca79;
`;
export const LastTextFirst = styled.div`
  opacity: 0;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 48px;
  /* or 192% */

  text-align: center;

  /* primary 1 */

  color: #50674c;
  animation-name: ${(props) => props.animation};
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;
export const LastTextSecond = styled.div`
  opacity: 0;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 48px;
  /* or 192% */

  text-align: center;

  /* primary 1 */

  color: #50674c;
  animation-name: ${(props) => props.animation};
  animation-duration: 2s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;
export const LastTextThird = styled.div`
  opacity: 0;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 48px;
  /* or 192% */

  text-align: center;

  /* primary 1 */

  color: #50674c;
  animation-name: ${(props) => props.animation};
  animation-duration: 3s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;
