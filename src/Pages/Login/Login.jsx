//react import
import React, { useEffect, useState, useCallback } from 'react';
import { useRef } from 'react';

import styled from 'styled-components';
import LoginBody1 from '../../static/components/LoginBody1';
//styled import
import {
  KakaoIcon,
  ButtonBody,
  ButtonText,
  LoginBody,
  KakaoLink,
  LDiv,
  MarginDIv,
  Divider,
  A4,
  DotDiv,
  PageDot,
  LogoArea,
  Logo,
  OtherDiv,
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
  ' 당신의 작지만 일상적인 \n 환경 미션을 통해서,\n 나비 효과를 만들어\n 아주 큰 변화로 이끌어보세요.';
const text2 =
  '무엇부터 시작하죠? \n 일상생활에서 실천 가능한 다양한 미션들을 받아보세요';
const text3 = '다른 사람들의 인증샷을 보고 \n 동기부여를 받아보세요.';
const text4 = '당신이 그릴 스텝, \n "내가 그린 스텝" \n 지금 시작해볼까요?';
const Login = () => {
  const dotArr = [1, 2, 3, 4, 5];
  const pageHeight = window.innerHeight;
  const [scrollIndex, setScrollIndex] = useState(1);
  const DIVIDER_HEIGHT = 5;
  const outerDivRef = useRef();
  useEffect(() => {
    document.querySelector('body').style.overflow = 'hidden'
    const wheelHandler = (e) => {
      e.preventDefault();
      // 스크롤 행동 구현
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener('wheel', wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener('wheel', wheelHandler);
    };
  }, []);
  console.log(scrollIndex);
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
       // 화면 세로길이, 100vh와 같습니다.

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: 'smooth',
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: 'smooth',
          });
          setScrollIndex(3);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
            left: 0,
            behavior: 'smooth',
          });
          setScrollIndex(4);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
            left: 0,
            behavior: 'smooth',
          });
          setScrollIndex(5);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 5) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 5 + DIVIDER_HEIGHT * 5,
            left: 0,
            behavior: 'smooth',
          });
          setScrollIndex(6);
        } else {
          outerDivRef.current.scrollTo({
            top: pageHeight * 6 + DIVIDER_HEIGHT * 6,
            left: 0,
            behavior: 'smooth',
          });
          setScrollIndex(6);
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: 'smooth',
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: 'smooth',
          });
          setScrollIndex(3);
        } else if(scrollTop >= pageHeight && scrollTop < pageHeight * 5) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
            left: 0,
            behavior: 'smooth',
          });
          setScrollIndex(4);
        }else {
          outerDivRef.current.scrollTo({
            top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
            left: 0,
            behavior: 'smooth',
          });
          setScrollIndex(5);
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener('wheel', wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener('wheel', wheelHandler);
    };
  }, []);
// useEffect(()=>{
//   document.querySelector('body').style.overflow = 'hidden'
// })
  return (
    <>
      {/* 1차디자인 */}
      {/* <A4> */}
      {/* 풀페이지 */}
      <OtherDiv ref={outerDivRef}>
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
        <DotDiv>
          {dotArr.map((item) => (
            <PageDot key={item} check={scrollIndex} num={item} onClick={()=>{setScrollIndex(item);outerDivRef.current.scrollTo({
              top: pageHeight * item + DIVIDER_HEIGHT * item,
              left: 0,
              behavior: 'smooth',
            })}} />
          ))}
        </DotDiv>
      </OtherDiv>
      {/* 풀페이지 */}

      {/* </A4> */}
    </>
  );
};

export default Login;
