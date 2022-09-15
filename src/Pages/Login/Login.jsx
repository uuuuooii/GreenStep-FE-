//react import
import React from "react";

import styled from "styled-components";
import LoginBody1 from "../../static/components/LoginBody1";
//styled import
import {
  KakaoIcon,
  ButtonBody,
  ButtonText,
  LoginBody,
  KakaoLink,
  LDiv,
} from "./LoginStyled";
const text1 =
  " 당신의 작지만 일상적인 \n 환경 미션을 통해서,\n 나비 효과를 만들어\n 아주 큰 변화로 이끌어보세요.";
const text2 =
  "무엇부터 시작하죠? \n 일상생활에서 실천 가능한 다양한 미션들을 받아보세요";
const text3 = "다른 사람들의 인증샷을 보고 \n 동기부여를 받아보세요.";
const text4 = '당신이 그릴 스텝, \n "내가 그린 스텝" \n 지금 시작해볼까요?';
const Login = ({ Header }) => {
  return (
    <>
      {Header}
      <A4>
        <LogoArea>
          <LDiv>
            <LoginBody1 />
          </LDiv>
        </LogoArea>
        <FirstArea>
          <FirstText>{text1}</FirstText>
        </FirstArea>
        <SecondArea>
          <SecondText>{text2}</SecondText>
        </SecondArea>
        <ThirdArea>
          <ThirdText>{text3}</ThirdText>
        </ThirdArea>
        <FourthArea>
          <FourthText>{text4}</FourthText>
        </FourthArea>

        {/* <KakaoLink href="https://kauth.kakao.com/oauth/authorize?client_id=3e7b3b7d9b0de5387c8ac0d9325f57ab&redirect_uri=https://greenstepapp.com/users/kakao/callback&response_type=code"> */}
        <KakaoLink href="https://kauth.kakao.com/oauth/authorize?client_id=3e7b3b7d9b0de5387c8ac0d9325f57ab&redirect_uri=http://localhost:3000/users/kakao/callback&response_type=code">
          <ButtonBody>
            <KakaoIcon />
            <ButtonText>카카오 로그인</ButtonText>
          </ButtonBody>
        </KakaoLink>
      </A4>
    </>
  );
};

export default Login;

const FirstArea = styled.div`
  height: 100vh;
  border: 1px solid black;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const SecondArea = styled.div`
  height: 100vh;
  border: 1px solid black;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ThirdArea = styled.div`
  height: 100vh;
  border: 1px solid black;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const FourthArea = styled.div`
  height: 100vh;
  border: 1px solid black;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const LogoArea = styled.div`
  height: 100vh;
  border: 1px solid black;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const FirstText = styled.div`
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #84ca79;
  max-width: 300px;
  position: absolute;
  top: 914px;
  white-space: pre-wrap;
`;
const SecondText = styled.div`
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #84ca79;
  position: absolute;
  top: 1533px;
  max-width: 300px;
  white-space: pre-wrap;
`;
const ThirdText = styled.div`
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #84ca79;
  position: absolute;
  max-width: 300px;
  white-space: pre-wrap;
  top: 2124px;
`;
const FourthText = styled.div`
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  white-space: pre-wrap;
  max-width: 300px;
  text-align: center;
  color: #84ca79;
  position: absolute;
  top: 2665px;
`;
const A1 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  background-color: red;
`;
const A2 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  background-color: yellow;
`;
const A3 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  background-color: blue;
`;
const A4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 3200px;
  background-image: url("data:image/svg+xml, %3Csvg width='375' height='3200' viewBox='0 0 375 3200' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Crect width='375' height='3200' fill='url(%23paint0_linear_665_12829)' fill-opacity='0.7' /%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_665_12829' x1='187.5' y1='0' x2='187.5' y2='3200' gradientUnits='userSpaceOnUse' %3E%3Cstop stop-color='%2384CA79' /%3E%3Cstop offset='0.276042' stop-color='%2394D28B' stop-opacity='0.7' /%3E%3Cstop offset='1' stop-color='%23B2E2AB' stop-opacity='0' /%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E");
`;
