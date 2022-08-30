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
`;

export const FirstModalSection = styled.div`
  /* max-width: 300px; */
  width: 100%;
  background-color: white;
  margin: 0px auto 0px auto;
  /* border-radius: 20px; */
  /* padding: 0 15px; */
`;

export const ModalHeader = styled.div`
width: 100%;
background-color: yellow;
padding: 5px 0;
text-align: center;
display: flex;
`


export const TopText = styled.div`
text-align: center;
`

export const ArrowBack = styled(MdOutlineArrowBackIosNew)`
  color: #e66a2f;
  /* margin-left: 6px;
  margin-top: 6px; */
  &:hover {
    cursor: pointer;
  }
`;
export const ArrowArea = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: #f7f6f1;
  /* margin-top: 12px;
  margin-left: 20px; */
  &:hover {
    cursor: pointer;
  }
`;

export const SelectBody = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`
export const ImgArea = styled.div`
width: 100%;
font-size: 4px;
`
export const SelectImg = styled.img`
width: 100px;
height: 100px;
&:hover{
    cursor: pointer;
}
`

export const ImgDiv = styled.div`
margin: 40px;
`

export const SeleceArea = styled.div`
width: 100px;
display: flex;
/* justify-content: space-around; */
`