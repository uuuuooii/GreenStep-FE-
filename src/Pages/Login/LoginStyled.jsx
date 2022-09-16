import styled from "styled-components";
import { RiKakaoTalkFill } from "react-icons/ri";

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
padding: 60px 0;
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
