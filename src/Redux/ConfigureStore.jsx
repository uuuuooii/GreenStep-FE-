import { configureStore, combineReducers } from "@reduxjs/toolkit";
import user from "./modules/user";
import mission from "./modules/mission";
import userInfo from "./modules/userInfoSlice";

const rootReducer = combineReducers({ user, mission, userInfo });
const store = configureStore({ reducer: rootReducer });

export default store;
