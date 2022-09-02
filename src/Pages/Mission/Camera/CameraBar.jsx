//styled import
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import styled from 'styled-components';

export const CameraBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UploadButton = styled(BsFillArrowUpCircleFill)`
  width: 35px;
  height: 35px;
  margin: 15px 0;
  &:hover {
    cursor: pointer;
  }
`;
export const UploadImg = styled.img`
  width: 400px;
  height: 400px;
`;
