import styled from 'styled-components';

import { AiOutlineCheckCircle, AiFillCheckCircle } from 'react-icons/ai';

export const CheckedIcon = styled(AiFillCheckCircle)`
  color: ${(props) => (props.color ? props.color : '#d9d9d9')};
  font-size: ${(props) => (props.size ? props.size : '20px')};
  transition: all 0.5s;
  border-radius: 10px;
`;

export const CheckIcon = styled(AiOutlineCheckCircle)`
  color: ${(props) => (props.color ? props.color : '#d9d9d9')};
  font-size: ${(props) => (props.size ? props.size : '20px')};
  transition: all 0.5s;
  border-radius: 10px;
`;
