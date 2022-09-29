//react import
import React from "react";
import { useNavigate } from "react-router";
//components import
import ErrorImage from "../../static/components/ErrorImage";
import { ErrorBody, ErrorText } from "./ErrorStyled";
import { IoIosArrowBack } from "react-icons/io";
import "./Error.css";

const Error = () => {
  const navigate = useNavigate();
  return (
    <ErrorBody>
      <div className="error-back-arrow-area">
        <div onClick={() => navigate(-1)}>
          <IoIosArrowBack className="error-back-arrow-icon" />
        </div>
      </div>
      <div className="error-image-area">
        <ErrorImage />
      </div>
      <ErrorText>
        요청하신 페이지를 찾을 수 없습니다.
        <br />
        입력하신 주소가 정확한지 다시 한번 확인해주세요.
      </ErrorText>
    </ErrorBody>
  );
};
export default Error;
