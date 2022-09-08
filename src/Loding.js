import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userThunk } from "./Redux/modules/user";
import axios from "axios";
import instance from "./Redux/modules/instance";
const Test = () => {
  const url = process.env.REACT_APP_URL;
  const code = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`${instance}/users/kakao/callback`, { params: { code } })
      .then((res) => {
        const token = res.headers.authorization;
        const refresh_token = res.headers.refresh_token;
        localStorage.setItem("Authorization", token);
        sessionStorage.setItem("refresh-Token", refresh_token);
        dispatch(userThunk(res.data.data));
        res.data.data.newComer ? navigate("/modal") : navigate("/mission");
      }, []);
  });

  return <div>로딩중..........</div>;
};

export default Test;
