import { RiKakaoTalkFill } from "react-icons/ri";
import styled from "styled-components";

export const UploadButton = styled.div`
  color: #fcfcfa;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 19px;
  width: 132px;
  height: 18px;
  background: #84ca79;
  border-radius: 30px;
  margin: 30px 0 10px 0;
  &:hover {
    cursor: pointer;
  }
`;
export const ShareButton = styled.div`
  background: #b8dde2;
  color: #fcfcfa;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 19px;
  width: 132px;
  height: 18px;
  background: #84ca79;
  border-radius: 30px;
  margin-bottom: 43px;
`;
export const PostShareButton = styled.div`
  color: #fcfcfa;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 19px;
  width: 132px;
  height: 18px;
  background: #84ca79;
  border-radius: 30px;
  margin: 35px 0 67px 0;
`;

export const UploadContentTextArea = styled.textarea`
  width: 318px;
  height: 60px;
  margin: 0px auto 14px auto;
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-family: "AppleNeoR";
  font-size: 13px;
  font-weight: 600;
  line-height: 16px;
  &::placeholder {
    /* background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M0 12.375V15.5H3.125L12.3417 6.28333L9.21667 3.15833L0 12.375ZM14.7583 3.86667C15.0833 3.54167 15.0833 3.01667 14.7583 2.69167L12.8083 0.741667C12.4833 0.416667 11.9583 0.416667 11.6333 0.741667L10.1083 2.26667L13.2333 5.39167L14.7583 3.86667Z' fill='%232b5139' /%3E%3C/svg%3E");
    background-size: contain;
    background-position: 1px center;
    background-repeat: no-repeat;
    background-position-x: 185px; */
    color: #2b5139;
    font-family: "AppleNeoR";
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
  }
  &:focus {
    outline: 1.5px solid #84ca79;
    ::-webkit-input-placeholder {
      color: transparent;
      background-image: none;
    }
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
  align-items: center;
  justify-content: center;
`;
export const KakaoReactIcon = styled(RiKakaoTalkFill)`
  font-size: 25px;
  background-color: transparent;
`;

export const UploadIconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const KakaoIconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 5px;
`;

export const IconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 3px;
`;

export const ButtonText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  margin-left: 5px;
  height: 100%;
`;
export const ShareText = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "AppleNeoR";
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  margin-left: 3px;
  margin-bottom: 1px;
  height: 100%;
`;
export const TotalButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
