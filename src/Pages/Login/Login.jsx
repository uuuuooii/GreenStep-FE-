//react import
import React from "react";

//styled import
import {
  KakaoIcon,
  ButtonBody,
  ButtonText,
  LoginBody,
  KakaoLink,
} from "./LoginStyled";

const Login = () => {
  return (
    <LoginBody>
      <KakaoLink href="https://kauth.kakao.com/oauth/authorize?client_id=3e7b3b7d9b0de5387c8ac0d9325f57ab&redirect_uri=https://greenstepapp.com/users/kakao/callback&response_type=code">
        <ButtonBody>
          <KakaoIcon />
          <ButtonText>카카오 로그인</ButtonText>
        </ButtonBody>
      </KakaoLink>
    </LoginBody>
  );
};

export default Login;
