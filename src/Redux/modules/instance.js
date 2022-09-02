import axios from "axios";

const instance = axios.create({
  baseURL: "",
});

const Token = localStorage.getItem("authorization");
const Retoken = localStorage.getItem("refresh-Token");

instance.defaults.headers.common["authorization"] = Token;
instance.defaults.headers.common["refresh-Token"] = Retoken;
// console.log(instance.defaults);
export default instance;
