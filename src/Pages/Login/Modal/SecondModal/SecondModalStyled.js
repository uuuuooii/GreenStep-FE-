import styled from 'styled-components';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
export const SecondModalBody = styled.div`
  display: ${(props) => (props.display == 2 ? 'block' : 'none')};
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
`;

export const SecondModalSection = styled.div`
  width: 100%;
  background-color: white;
  margin: 0px auto 0px auto;
`;

export const ModalHeader = styled.div`
  width: 100%;
  background-color: yellow;
  padding: 5px 0;
  text-align: center;
  display: flex;
  /* justify-content: center; */
`;

export const TopText = styled.div`
  text-align: center;
  margin: 0 auto;
`;

export const SelectImg = styled.img`
  width: 100px;
  height: 100px;
  outline: ${(props) =>
    props.check == props.select ? '2px solid black' : 'none'};
  &:hover {
    cursor: pointer;
  }
`;

export const ImgDiv = styled.div`
  width: 100px;
  margin: 32px 40px;
`;

export const ImgArea = styled.div`
  width: 100%;
  font-size: 4px;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
export const SelectBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`;
export const ButtonText = styled.div`
  /* margin: auto; */
  width: 32px;
  margin: 0 5px;
  &:hover {
    cursor: pointer;
  }
`;
