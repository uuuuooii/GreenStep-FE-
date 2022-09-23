//react import
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import {
  LogoFade,
  FadeBottomOn,
  FadeBottomOnImage,
} from "../../Components/Animation/Animation";
import { useInView } from "react-intersection-observer";
import LoginBody1 from "../../static/components/LoginBody1";
//styled import
import {
  ButtonBody,
  KakaoLink,
  LDiv,
  MarginDIv,
  LogoArea,
  Logo,
  FirstArea,
  FirstTitle,
  FirstText,
  FirstImgDiv,
  FirstImg,
  FirstCover,
  FirstCoverDiv,
  SecondArea,
  SecondImgDiv,
  SecondImg,
  SecondCoverDiv,
  SecondText,
  SecondRefDiv,
  LastTextFirst,
  LastTextSecond,
  LastTextThird,
  FourthArea,
  FourthText,
  LogoGraDiv,
} from "./LoginStyled";

const text1 =
  " 당신의 작지만 일상적인 \n 환경 미션을 통해서,\n 나비 효과를 만들어\n 아주 큰 변화로 이끌어보세요.";
const text2 =
  "무엇부터 시작하죠? \n 일상생활에서 실천 가능한\n 다양한 미션들을 받아보세요";
const text3 = "다른 사람들의 인증샷을 보고 \n 동기부여를 받아보세요.";
const text4 = '당신이 그릴 스텝, \n "내가 그린 스텝" \n 지금 시작해볼까요?';
const Login = () => {
  const [first, firstView] = useInView();
  const [firstAni, setFirstAni] = useState(false);
  const [second, secondView] = useInView();
  const [secondAni, setSecondAni] = useState(false);
  const [third, thirdView] = useInView();
  const [thirdAni, setThirdAni] = useState(false);
  const [fourth, fourthView] = useInView();
  const [fourthAni, setFourthAni] = useState(false);

  useEffect(() => {
    if (fourthView) {
      setFourthAni(true);
    } else if (thirdView) {
      setThirdAni(true);
    } else if (secondView) {
      setSecondAni(true);
    } else if (firstView) {
      setFirstAni(true);
    }
  }, [firstView, secondView]);
  // useEffect(()=>{},[secondView])

  return (
    <>
      =
      <LogoArea>
        <LogoGraDiv />
        <LDiv>
          <LoginBody1 />
        </LDiv>
      </LogoArea>
      <FirstArea>
        <FirstTitle animation={firstAni ? FadeBottomOn : null}>
          Mission
        </FirstTitle>
        <FirstImgDiv>
          <FirstImg
            src="/images/Login/1번이미지.jpg"
            animation={firstAni ? FadeBottomOnImage : null}
            ref={first}
          />

          <FirstCoverDiv>
            <FirstCover
              src="/images/Login/1번커버.png"
              animation={firstAni ? FadeBottomOn : null}
            />{" "}
          </FirstCoverDiv>
        </FirstImgDiv>
        <FirstText animation={firstAni ? FadeBottomOn : null}>
          {text2}
        </FirstText>
      </FirstArea>
      <SecondArea>
        <FirstTitle animation={secondAni ? FadeBottomOn : null} ref={second}>
          Feed
        </FirstTitle>
        <SecondImgDiv>
          <SecondImg
            src="/images/Login/2번이미지.jpg"
            animation={secondAni ? FadeBottomOnImage : null}
          />
          <SecondCoverDiv>
            <FirstCover
              src="/images/Login/2번커버.png"
              animation={secondAni ? FadeBottomOn : null}
            />{" "}
          </SecondCoverDiv>
        </SecondImgDiv>
        <SecondText animation={secondAni ? FadeBottomOn : null}>
          {text3}
        </SecondText>
        <SecondRefDiv />
      </SecondArea>
      <FirstArea>
        <FirstTitle animation={thirdAni ? FadeBottomOn : null} ref={third}>
          Habbit
        </FirstTitle>
        <FirstImgDiv>
          <FirstImg
            src="/images/Login/3번이미지.jpg"
            animation={thirdAni ? FadeBottomOnImage : null}
          />
          <FirstCoverDiv>
            <FirstCover
              src="/images/Login/3번커버.png"
              animation={thirdAni ? FadeBottomOn : null}
            />{" "}
          </FirstCoverDiv>
        </FirstImgDiv>
        <FirstText animation={thirdAni ? FadeBottomOn : null}>
          {text1}
        </FirstText>
      </FirstArea>
      <FourthArea>
        <LastTextFirst ref={fourth} animation={fourthAni ? FadeBottomOn : null}>
          당신이 그릴 스텝,
        </LastTextFirst>
        <LastTextSecond animation={fourthAni ? FadeBottomOn : null}>
          "내가 그린 스텝"{" "}
        </LastTextSecond>
        <LastTextThird animation={fourthAni ? FadeBottomOn : null}>
          지금 시작해볼까요?
        </LastTextThird>
      </FourthArea>
      <MarginDIv>
        {/* <KakaoLink href="https://kauth.kakao.com/oauth/authorize?client_id=3e7b3b7d9b0de5387c8ac0d9325f57ab&redirect_uri=https://greenstepapp.com/users/kakao/callback&response_type=code"> */}
        <KakaoLink href="https://kauth.kakao.com/oauth/authorize?client_id=3e7b3b7d9b0de5387c8ac0d9325f57ab&redirect_uri=http://localhost:3000/users/kakao/callback&response_type=code">
          <ButtonBody>
            <Logo />
          </ButtonBody>
        </KakaoLink>
      </MarginDIv>
    </>
  );
};

export default Login;
