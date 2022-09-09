//styled import
import styled from 'styled-components';

export const UploadButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 17px;

  width: 119px;
  height: 31px;

  background: #b8dde2;
  margin: 19px 0;

  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;
export const UploadImg = styled.img`
  width: 350px;
  height: 350px;
  margin: 90px 0;
`;
