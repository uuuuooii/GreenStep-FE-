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
      return thunkAPI.fulfillWithValue(data); // 엑스트라 리듀서로 넘겨줌
    } catch (error) {
      return thunkAPI.rejectWithValue(error); // 엑스트라 리듀서로 넘겨줌
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
      return thunkAPI.fulfillWithValue(data); // 엑스트라 리듀서로 넘겨줌
    } catch (error) {
      return thunkAPI.rejectWithValue(error); // 엑스트라 리듀서로 넘겨줌
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
      return thunkAPI.fulfillWithValue(data); // 엑스트라 리듀서로 넘겨줌
    } catch (error) {
      return thunkAPI.rejectWithValue(error); // 엑스트라 리듀서로 넘겨줌
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
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.userInfo = action.payload; // Store에 있는 mypage에 서버에서 가져온 mypage를 넣습니다.
    },
    [getCertThunk.fulfilled]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.certification = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    }, [getPostThunk.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.post = action.payload; // Store에 있는 mypage에 서버에서 가져온 mypage를 넣습니다.
    },
  },
});

export default userInfoSlice.reducer;
