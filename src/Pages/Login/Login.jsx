//react import
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//styled import
import { KakaoIcon, ButtonBody, ButtonText, LoginBody } from './LoginStyled';

const Login = () => {
  const navigate = useNavigate();
  return (
    <LoginBody>
      {/* <ButtonBody onClick={()=>navigate('/')} >
        <KakaoIcon />
        <ButtonText>카카오 로그인</ButtonText>
      </ButtonBody> */}
      {/* <a href="https://kauth.kakao.com/oauth/authorize?client_id=3e7b3b7d9b0de5387c8ac0d9325f57ab&redirect_uri=http://54.180.30.74/users/kakao/callback&response_type=code">
        테스트
      </a> */}
    </LoginBody>
  );
};

export default Login;
