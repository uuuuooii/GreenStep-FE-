import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "./instance";

const initialState = {
  userInfo: {},
  isLoading: false,
  error: null,
};
const URL = process.env.REACT_APP_URL;

// Thunk 미들웨어 함수
export const getUserInfoThunk = createAsyncThunk(
  "userInfo/getUserInfo",
  async (payload, thunkAPI) => {
    try {
      const data = await instance
        .get(`${URL}/users/info`)
        .then((res) => res.data.data);
      return thunkAPI.fulfillWithValue(data); // 엑스트라 리듀서로 넘겨줌
    } catch (error) {
      return thunkAPI.rejectWithValue(error); // 엑스트라 리듀서로 넘겨줌
    }
  }
);

// 리듀서
export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {},
  extraReducers: {
    [getUserInfoThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [getUserInfoThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userInfo = action.payload;
    },
    [getUserInfoThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userInfoSlice.reducer;
