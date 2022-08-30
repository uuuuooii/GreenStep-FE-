import axios from "axios";

const instance = axios.create({
  baseURL: "",
});

const Token = localStorage.getItem("Token");
const Retoken = localStorage.getItem("Retoken");

instance.defaults.headers.common["Authorization"] = Token;
instance.defaults.headers.common["Refresh-Token"] = Retoken;
// console.log(instance.defaults);
export default instance;
