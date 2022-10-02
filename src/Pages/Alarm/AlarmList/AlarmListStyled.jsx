import styled from 'styled-components';
import { FadeBottomOn } from '../../../Components/Animation/Animation';

export const ContentDiv = styled.div`
  display: flex;
  margin: 20px 0;
  justify-content: space-between;
  opacity: ${(props) => (props.read ? 0.5 : 1)};
`;
export const ModalBackGround = styled.div`
  background-color: #868686;
  z-index: 5;
  position: fixed;
  width: 100%;
  height: 100%;
  opacity: 0.5;
`;
export const ModalArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  bottom: 13px;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 11;
  animation-name: ${FadeBottomOn};
  animation-duration: 0.3s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;

export const ModalBottomArea = styled.div`
  width: 96%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
  color: #50674c;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 132%;
  text-align: center;
  letter-spacing: 0.03em;
  margin-top: 6px;
  border-radius: 15px;
  padding: 14px 0;
`;
export const ModalTopArea = styled.div`
  width: 96%;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.95);
`;
export const ModalTopText = styled.div`
  font-weight: 500;
  font-size: 13px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.03em;
  color: #868686;
  white-space: pre-wrap;
  padding: 14px 0;
`;
export const ModalBottomText = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 132%;
  text-align: center;
  color: #e1756e;
  padding: 14px 0;
`;
export const CenterLine = styled.div`
  width: 100%;
  height: 0px;
  border: 0.5px solid #868686;
`;
