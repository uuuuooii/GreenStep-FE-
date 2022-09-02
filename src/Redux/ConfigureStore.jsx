import { configureStore, combineReducers } from "@reduxjs/toolkit";
import user from "./modules/user";
import mission from "./modules/mission";

const rootReducer = combineReducers({ user, mission });
const store = configureStore({ reducer: rootReducer });

export default store;
