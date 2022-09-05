import styled from 'styled-components';
import { AiOutlineCheckCircle,AiFillCheckCircle } from 'react-icons/ai';

export const ThirdModalBody = styled.div`
  display: ${(props) => (props.display == 3 ? 'block' : 'none')};
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
  background-color: white;
`;

export const ThirdModalSection = styled.div`
  width: 100%;
  height: 90%;
  background-color: white;
  margin: 0px auto 0px auto;
`;

export const ModalHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  justify-content: center;
  text-align: center;
  display: flex;
`;
export const TopText = styled.div`
  text-align: center;
  margin: 0 auto;
  font-size: 20px;
`;
export const SelectBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ButtonText = styled.div`
  /* margin: auto; */
  width: 32px;
  margin: 0 10px;
  &:hover {
    cursor: pointer;
  }
`;
export const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  margin: 15px 0;
`;
export const CenterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TextInput = styled.input`
  width: 230px;
  height: 40px;
  margin: 15px 0;
  outline: none;
  border-radius: 5px;
  border: 1px solid black;
  padding: 0 10px;
  &:focus {
    outline: 0.5px solid black;
  }
`;

export const CheckMail = styled(AiOutlineCheckCircle)`
color: yellow;
`