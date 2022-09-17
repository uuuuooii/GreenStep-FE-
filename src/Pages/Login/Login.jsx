//react import
import React, { useEffect, useState, useCallback } from "react";

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
  MarginDIv,
  A4,
  LogoArea,
  Logo,
  FirstArea,
  FirstText,
  SecondArea,
  SecondText,
  ThirdArea,
  ThirdText,
  FourthArea,
  FourthText,
} from './LoginStyled';


const text1 =
  " 당신의 작지만 일상적인 \n 환경 미션을 통해서,\n 나비 효과를 만들어\n 아주 큰 변화로 이끌어보세요.";
const text2 =
  "무엇부터 시작하죠? \n 일상생활에서 실천 가능한 다양한 미션들을 받아보세요";
const text3 = "다른 사람들의 인증샷을 보고 \n 동기부여를 받아보세요.";
const text4 = '당신이 그릴 스텝, \n "내가 그린 스텝" \n 지금 시작해볼까요?';
const Login = () => {
  return (
    <>
    {/* 1차디자인 */}
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
        <MarginDIv>
          <KakaoLink href="https://kauth.kakao.com/oauth/authorize?client_id=3e7b3b7d9b0de5387c8ac0d9325f57ab&redirect_uri=https://greenstepapp.com/users/kakao/callback&response_type=code">
            {/* <KakaoLink href="https://kauth.kakao.com/oauth/authorize?client_id=3e7b3b7d9b0de5387c8ac0d9325f57ab&redirect_uri=http://localhost:3000/users/kakao/callback&response_type=code"> */}
            <ButtonBody>
              <Logo />
            </ButtonBody>
          </KakaoLink>
        </MarginDIv>
      </A4>
    </>
  );
};

export default Login;
