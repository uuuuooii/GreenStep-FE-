import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "./instance";
import axios from "axios";

export const __GetTodaymission = createAsyncThunk(
  "/missions/today-lists/__GetTodaymission",
  async () => {
    try {
      const response = await instance.get("/missions/today-lists");
      const data = response.data.data;
      return data;
    } catch (error) {}
  }
);

export const __GetDailymission = createAsyncThunk(
  "/missions/daily-lists/__GetDailymission",
  async () => {
    try {
      const response = await instance.get("/missions/daily-lists");
      const data = response.data.data;
      return data;
    } catch (error) {}
  }
);

export const __GetWeeklymission = createAsyncThunk(
  "/missions/weekly-lists/__GetWeeklymission",
  async () => {
    try {
      const response = await instance.get("/missions/weekly-lists");
      const data = response.data.data;
      return data;
    } catch (error) {}
  }
);

const missionItem = createSlice({
  name: "mission",
  initialState: {
    challenge: [],
    daily: [],
    weekly: [],
  },
  reducers: {},
  extraReducers: {
    [__GetTodaymission.fulfilled]: (state, action) => {
      state.challenge = action.payload;
    },
    [__GetDailymission.fulfilled]: (state, action) => {
      state.daily = action.payload;
    },
    [__GetWeeklymission.fulfilled]: (state, action) => {
      state.weekly = action.payload;
    },
  },
});

export const { signInAction } = missionItem.actions;
export default missionItem.reducer;
