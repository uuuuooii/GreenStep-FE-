import axios from "axios";
const URL = process.env.REACT_APP_URL;
const instance = axios.create({
  baseURL: `${URL}`,
});

const Token = localStorage.getItem("authorization");
const Retoken = localStorage.getItem("refresh-Token");

instance.defaults.headers.common["authorization"] = Token;
instance.defaults.headers.common["refresh-Token"] = Retoken;
export default instance;
