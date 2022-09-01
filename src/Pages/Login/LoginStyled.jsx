import styled from 'styled-components';
import { RiKakaoTalkFill } from 'react-icons/ri';

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
  background-color: yellow;
  padding: 5px;
  border-radius: 5px;
  &:hover{
    cursor: pointer;
    outline: 1px solid black;
  }
`;
export const KakaoIcon = styled(RiKakaoTalkFill)`
  position: absolute;
  width: 20px;
  height: 20px;
`;
export const ButtonText = styled.div`
  width: 100%;
  text-align: center;
`;