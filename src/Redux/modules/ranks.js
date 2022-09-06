import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "./instance";

export const __GetLanks = createAsyncThunk(
  "/ranks/missions/__GetLanks",
  async () => {
    try {
      const response = await instance.get("/ranks/missions");

      const data = response.data.data;
      // console.log(data);
      return data;
    } catch (error) {}
  }
);

const ranksItem = createSlice({
  name: "ranks",
  initialState: {
    loaded: false,
    ranks: [],
  },
  reducers: {},
  extraReducers: {
    [__GetLanks.fulfilled]: (state, action) => {
      state.loaded = true;
      state.challenge = action.payload;
    },
  },
});

export const { signInAction } = ranksItem.actions;
export default ranksItem.reducer;
