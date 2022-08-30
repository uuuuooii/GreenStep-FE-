import styled from 'styled-components';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

export const FirstModalBody = styled.div`
  display: ${(props) => (props.display == 1 ? 'block' : 'none')};
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  max-height: 667px;
  max-width: 375px;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid black;
`;

export const FirstModalSection = styled.div`
  /* max-width: 300px; */
  width: 100%;
  height: 100%;
  background-color: white;
  margin: 0px auto 0px auto;
  /* border-radius: 20px; */
  /* padding: 0 15px; */
`;

export const ModalHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const TopText = styled.div`
  text-align: center;
  margin: auto;
  font-size: 20px;
`;

export const SelectBody = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ImgArea = styled.div`
  width: 100%;
  height: 100%;
  font-size: 4px;
  /* align-items: center;
justify-content: center;
display: flex; */
`;
export const SelectImg = styled.img`
  width: 100px;
  height: 100px;
  outline: ${(props) =>
    props.num == props.check ? '2px solid black;' : 'none'};
  &:hover {
    cursor: pointer;
  }
`;

export const ImgDiv = styled.div`
  margin: 100px 40px;
`;

export const SeleceArea = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
`;

export const ButtonText = styled.div`
  /* margin: auto; */
  width: 32px;
  margin: 0 10px;
  &:hover {
    cursor: pointer;
  }
`;
export const DummyText = styled.div`
  width: 32px;
  margin: 0 10px;
  /* display: none; */
`;
