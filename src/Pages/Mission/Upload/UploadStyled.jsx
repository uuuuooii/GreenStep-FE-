import styled from "styled-components";

export const UploadButton = styled.button`
  width: 142px;
  height: 38px;
  margin: 0 auto;
  padding-top: 4px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  color: white;
  font-size: 20px;
  background: #b8dde2;
  color: white;
  border: none;
  font-family: "Apple SD Gothic Neo";
`;

export const ShareButton = styled.button`
  width: 142px;
  height: 38px;
  margin: 0 auto;
  padding-top: 4px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  color: white;
  font-size: 20px;
  background: #b8dde2;
  color: white;
  border: none;
  font-family: "Apple SD Gothic Neo";
  &:hover {
    cursor: pointer;
  }
`;

export const UploadContentTextArea = styled.textarea`
  width: 318px;
  height: 60px;
  margin: 0px auto 14px auto;
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-size: 0.8125rem;
  font-style: normal;
  font-family: "Apple SD Gothic Neo";
  &::placeholder {
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M0 12.375V15.5H3.125L12.3417 6.28333L9.21667 3.15833L0 12.375ZM14.7583 3.86667C15.0833 3.54167 15.0833 3.01667 14.7583 2.69167L12.8083 0.741667C12.4833 0.416667 11.9583 0.416667 11.6333 0.741667L10.1083 2.26667L13.2333 5.39167L14.7583 3.86667Z' fill='%23B2E2AB' /%3E%3C/svg%3E");
    background-size: contain;
    background-position: 1px center;
    background-repeat: no-repeat;
    background-position-x: 215px;
    font-family: "Apple SD Gothic Neo";
    color: #84ca79;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
  }
  &:focus {
    outline: 1.5px solid #84ca79;
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
export const ButtonArea = styled.div`
  display: flex;
  margin: 16px 0 44px 0;
`;
