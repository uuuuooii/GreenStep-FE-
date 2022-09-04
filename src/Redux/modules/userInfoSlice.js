import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "./instance"

const initialState = {
  userInfo: {},
  //stateOfFollow: false,
  isLoading: false,
  error: null,
};
const URL = process.env.REACT_APP_URL;
// Thunk 미들웨어 함수
export const getUserInfoThunk = createAsyncThunk(
  "userInfo/getUserInfo",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.get(`${URL}/users/info`).then((res)=>res.data.data);
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
    // 아래는 마이페이지 유저네임, 닉네임 가져오는 thunk
    [getUserInfoThunk.pending]: (state) => {
      // 데이터를 가져오는 중
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [getUserInfoThunk.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.userInfo = action.payload; // Store에 있는 mypage에 서버에서 가져온 mypage를 넣습니다.
      // console.log(state.isLoading);
    },
    [getUserInfoThunk.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
      // console.log("this is error");
    },
  },
});

export default userInfoSlice.reducer;
