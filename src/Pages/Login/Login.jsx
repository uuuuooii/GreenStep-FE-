//react import
import React from 'react';

import styled from 'styled-components';
import LoginBody1 from '../../static/components/LoginBody1';
//styled import
import {
  KakaoIcon,
  ButtonBody,
  ButtonText,
  LoginBody,
  KakaoLink,
  LDiv
} from './LoginStyled';

const Login = ({Header}) => {
  return (
    <>
    {Header}
<A4>
<LDiv><LoginBody1/></LDiv>
<KakaoLink href="https://kauth.kakao.com/oauth/authorize?client_id=3e7b3b7d9b0de5387c8ac0d9325f57ab&redirect_uri=https://greenstepapp.com/users/kakao/callback&response_type=code">
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

const A1 = styled.div`
  width : 100%;
  height : 100vh;
  display:flex;
  justify-content : center;
  align-items:center;
  font-size:36px;
  background-color : red;
`
const A2 = styled.div`
  width : 100%;
  height : 100vh;
  display:flex;
  justify-content : center;
  align-items:center;
  font-size:36px;
  background-color : yellow;
`
const A3 = styled.div`
  width : 100%;
  height : 100vh;
  display:flex;
  justify-content : center;
  align-items:center;
  font-size:36px;
  background-color : blue;
`
const A4 = styled.div`
display: flex;
flex-direction: column;

height: 3200px;
  background-image: url("data:image/svg+xml, %3Csvg width='375' height='3200' viewBox='0 0 375 3200' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Crect width='375' height='3200' fill='url(%23paint0_linear_665_12829)' fill-opacity='0.7' /%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_665_12829' x1='187.5' y1='0' x2='187.5' y2='3200' gradientUnits='userSpaceOnUse' %3E%3Cstop stop-color='%2384CA79' /%3E%3Cstop offset='0.276042' stop-color='%2394D28B' stop-opacity='0.7' /%3E%3Cstop offset='1' stop-color='%23B2E2AB' stop-opacity='0' /%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E");
`