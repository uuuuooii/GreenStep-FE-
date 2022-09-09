import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from './instance';

const initialState = {
  userInfo: {},
  certification: {},
  post:{},
  isLoading: false,
  error: null,
};
const URL = process.env.REACT_APP_URL;

// Thunk 미들웨어 함수
export const getUserInfoThunk = createAsyncThunk(
  'userInfo/getUserInfo',
  async (payload, thunkAPI) => {
    try {
      const data = await instance
        .get(`/users/info`)
        .then((res) => res.data.data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getCertThunk = createAsyncThunk(
  'Cert/getCert',
  async (payload, thunkAPI) => {
    try {
      const data = await instance
        .get(`/profiles/missions`)
        .then((res) => res.data.data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getPostThunk = createAsyncThunk(
  'Post/getPost',
  async (payload, thunkAPI) => {
    try {
      const data = await instance
        .get(`/profiles/feed`)
        .then((res) => res.data.data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 리듀서
export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {},
  extraReducers: {
    [getUserInfoThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userInfo = action.payload;
    },
    [getCertThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.certification = action.payload; 
    }, [getPostThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload; 
    },
  },
});

export default userInfoSlice.reducer;
