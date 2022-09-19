import styled from 'styled-components';
import { RiKakaoTalkFill } from 'react-icons/ri';
import logo from './kakao_login_medium_wide.png';
import { GoPrimitiveDot } from 'react-icons/go';

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
export const KakaoIcon = styled(RiKakaoTalkFill)`
  position: absolute;
  width: 20px;
  height: 20px;
`;

export const KakaoLink = styled.a`
  text-decoration: none;
  /* color: black; */
  height: 50px;
  margin-bottom: 100px;
`;
export const LDiv = styled.div`
  /* position: absolute; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* top: 286px; */

  /* margin: 286px 80px 2700px 80px; */
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0.35) 77.08%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 107.5px;
  z-index: 999;
`;
export const MarginDIv = styled.div`
  height: 100vh;
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
export const OtherDiv = styled.div`
 background-image: url("data:image/svg+xml, %3Csvg width='375' height='3200' viewBox='0 0 375 3200' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Crect width='375' height='3200' fill='url(%23paint0_linear_665_12829)' fill-opacity='0.7' /%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_665_12829' x1='187.5' y1='0' x2='187.5' y2='3200' gradientUnits='userSpaceOnUse' %3E%3Cstop stop-color='%2384CA79' /%3E%3Cstop offset='0.276042' stop-color='%2394D28B' stop-opacity='0.7' /%3E%3Cstop offset='1' stop-color='%23B2E2AB' stop-opacity='0' /%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E");
;
  height: 100vh;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Divider = styled.div`
  width: 100%;
  height: 5px;
`;
export const DotDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 2%;
  bottom: 50%;
  transform: translateY(50%);
`;
export const PageDot = styled(GoPrimitiveDot)`
  margin: 5px 0;
  color: #84ca79;
  border: ${(props) =>
    props.num === props.check ? '1px solid #84CA79' : 'none'};
  border-radius: 50%;
`;
export const FirstArea = styled.div`
  height: 100vh;
  /* border: 1px solid black; */
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SecondArea = styled.div`
  height: 100vh;
  /* border: 1px solid black; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const FirstText = styled.div`
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
export const SecondText = styled.div`
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
export const A1 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  background-color: red;
`;
export const A2 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  background-color: yellow;
`;
export const A3 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  background-color: blue;
`;
export const A4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 3200px;
  background-image: url("data:image/svg+xml, %3Csvg width='375' height='3200' viewBox='0 0 375 3200' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Crect width='375' height='3200' fill='url(%23paint0_linear_665_12829)' fill-opacity='0.7' /%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_665_12829' x1='187.5' y1='0' x2='187.5' y2='3200' gradientUnits='userSpaceOnUse' %3E%3Cstop stop-color='%2384CA79' /%3E%3Cstop offset='0.276042' stop-color='%2394D28B' stop-opacity='0.7' /%3E%3Cstop offset='1' stop-color='%23B2E2AB' stop-opacity='0' /%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E");
`;
