import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router";
import "./introduce.css";
const Introduce = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="error-back-arrow-area">
        <div onClick={() => navigate(-1)}>
          <IoIosArrowBack className="error-back-arrow-icon" />
        </div>
      </div>
      <div className="introduce-text">
        운영자:
        <a
          href="mailto: keunhey0107@gmail.com"
          className="introduce-link-color"
        >
          {" "}
          keunhey0107@gmail.com{" "}
        </a>
      </div>
    </>
  );
};

export default Introduce;
