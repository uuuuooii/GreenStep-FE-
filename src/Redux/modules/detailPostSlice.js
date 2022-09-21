import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "./instance";

const initialState = {
  detailPost: {},
  isLoading: false,
  error: null,
};
const URL = process.env.REACT_APP_URL;

// Thunk 미들웨어 함수
export const getDetailPostThunk = createAsyncThunk(
  "detailPost/getDetailPost",
  async (payload, thunkAPI) => {
    try {
      const data = await instance
        .get(`/profiles/feed`)
        .then((res) => console.log(res));
      return thunkAPI.fulfillWithValue(data); // 엑스트라 리듀서로 넘겨줌
    } catch (error) {
      return thunkAPI.rejectWithValue(error); // 엑스트라 리듀서로 넘겨줌
    }
  }
);

// 리듀서
export const detailPostSlice = createSlice({
  name: "detailPost",
  initialState,
  reducers: {},
  extraReducers: {
    [getDetailPostThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.detailPost = action.payload;
    },
  },
});

export default detailPostSlice.reducer;
