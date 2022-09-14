import axios from "axios";
const URL = process.env.REACT_APP_URL;
const instance = axios.create({
  // baseURL: `https://greenstepserver.link`,
  baseURL:`http://13.209.16.253:8080`
});
instance.interceptors.request.use(function (instance) {
  const kakao_authorization = localStorage.getItem("kakao_authorization")
  const Token = localStorage.getItem("Authorization");
  const Retoken = localStorage.getItem("refresh-Token");
  instance.headers["Authorization"] = Token;
  instance.headers["refresh-Token"] = Retoken;
  instance.headers["kakao_authorization"] = kakao_authorization
  return instance;
});

export default instance;
