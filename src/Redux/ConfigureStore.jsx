import { configureStore, combineReducers } from "@reduxjs/toolkit";
import user from "./modules/user";
import mission from "./modules/mission";
import userInfo from "./modules/userInfoSlice";
import ranks from "./modules/ranks";

const rootReducer = combineReducers({ user, mission, userInfo, ranks });
const store = configureStore({ reducer: rootReducer });

export default store;
