import styled from "styled-components";

export const UploadButton = styled.button`
  width: 142px;
  height: 38px;
  margin: 15px auto;
  padding-top: 4px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  border: 1px solid #868686;
  border-radius: 5px;
  color: white;
  font-size: 20px;
  background-color: #868686;
`;

export const ShareButton = styled.button`
  display: ${(props) => (props.display ? props.display : "block")};
  width: 142px;
  height: 38px;
  margin: 15px auto;
  padding-top: 4px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  border: 1px solid #868686;
  border-radius: 5px;
  color: white;
  font-size: 20px;
  background-color: #868686;
  &:hover {
    cursor: pointer;
  }
`;

export const UploadContentTextArea = styled.textarea`
  display: ${(props) => (props.display ? props.display : "none")};
  width: 318px;
  height: 60px;
  margin: 0px auto 14px auto;
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-size: 0.8125rem;
  font-style: normal;
  &:hover {
    cursor: pointer;
  }
`;

export const UploadSkeleton = styled.div`
  width: 100%;
  height: 712px;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  margin-top: 6px;
  background-color: #d9d9d9;
`;
