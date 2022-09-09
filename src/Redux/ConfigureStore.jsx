import { configureStore, combineReducers } from "@reduxjs/toolkit";
import user from "./modules/user";
import mission from "./modules/mission";
import userInfo from "./modules/userInfoSlice";
import detailPost from "./modules/detailPostSlice";
import detailPhotoShot from "./modules/detailPhotoShotSlice";
import ranks from "./modules/ranks";

const rootReducer = combineReducers({
  user,
  mission,
  userInfo,
  detailPost,
  detailPhotoShot,
  ranks,
});
const store = configureStore({ reducer: rootReducer });

export default store;
