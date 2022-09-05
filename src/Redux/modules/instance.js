import axios from "axios";
const URL = process.env.REACT_APP_URL;
const instance = axios.create({
  baseURL: `${URL}`,
});
instance.interceptors.request.use(function (instance){
const Token = localStorage.getItem("Authorization");
const Retoken = localStorage.getItem("refresh-Token");
instance.headers["Authorization"] = Token;
instance.headers["refresh-Token"] = Retoken;
return instance })

export default instance;