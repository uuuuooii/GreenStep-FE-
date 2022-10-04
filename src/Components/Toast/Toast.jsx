import React from "react";
import { SlideBottom, FadeOut } from "../Animation/Animation";
import "./Toast.css";
import styled from "styled-components";

const Toast = ({ text, toastNum }) => {
  return <ToastBody toastNum={toastNum}>{text}</ToastBody>;
};

export default Toast;

const ToastBody = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  margin: 0 auto;
  transition: all 0.5s;
  transform: translateX(-50%);
  bottom: 80px;
  font-size: 13px;
  font-family: "AppleNeoM";
  color: #fff;
  background-color: rgba(178, 226, 171, 0.75);
  box-shadow: 0px 2px 2px #dadada;
  border-radius: 20px;
  min-height: 20px;
  max-width: 205px;
  /* margin: 4px auto; */
  padding: 8px 35px;
  text-align: center;
  line-height: 22px;
  animation-name: ${SlideBottom};
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  z-index: 10;
`;
