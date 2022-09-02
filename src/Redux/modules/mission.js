import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import instance from "./instance";

export const __GetTodaymission = createAsyncThunk(
  "/missions/today-lists/__GetTodaymission",
  async (payload, thunkAPI) => {
    const data = await axios
      .get("http://54.180.30.74/missions/today-lists")
      .then((res) => {
        console.log(res);
      })
      .catch((error) => error);
    console.log(data);
    return thunkAPI.fulfillWithValue(data);
  }
);

const missionItem = createSlice({
  name: "mission",
  initialState: {
    loaded: false,
    mission: [],
  },
  reducers: {},
  extraReducers: {
    [__GetTodaymission.fulfilled]: (state, action) => {
      state.loaded = true;
    },
  },
});

export const { signInAction } = missionItem.actions;
export default missionItem.reducer;
