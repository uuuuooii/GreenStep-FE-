import styled from "styled-components";
import { MdOutlineDoubleArrow } from 'react-icons/md';

export const ImageCard = styled.img`
      width: 123px;
  height: 123px;
&:hover{
    cursor: pointer;
}
`
export const ArchiveArrow = styled(MdOutlineDoubleArrow)`
    &:hover{
        cursor: pointer;
    }
`