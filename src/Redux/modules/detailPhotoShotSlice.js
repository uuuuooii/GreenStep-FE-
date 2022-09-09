import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "./instance";

const initialState = {
  detailPhotoShot: {},
  isLoading: false,
  error: null,
};
const URL = process.env.REACT_APP_URL;

// Thunk 미들웨어 함수
export const getDetailPhotoShotThunk = createAsyncThunk(
  "detailPhotoShot/getDetailPhotoShot",
  async (payload, thunkAPI) => {
    try {
      const data = await instance
        .get(`/profiles/missions`)
        .then((res) => res.data.data);
      return thunkAPI.fulfillWithValue(data); // 엑스트라 리듀서로 넘겨줌
    } catch (error) {
      return thunkAPI.rejectWithValue(error); // 엑스트라 리듀서로 넘겨줌
    }
  }
);

// 리듀서
export const detailPhotoShotSlice = createSlice({
  name: "detailPhotoShot",
  initialState,
  reducers: {},
  extraReducers: {
    [getDetailPhotoShotThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.detailPhotoShot = action.payload;
    },
  },
});

export default detailPhotoShotSlice.reducer;
