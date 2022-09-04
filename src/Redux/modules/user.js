import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = { user: [] };
// const URL = process.env.REACT_APP_URL;

export const userThunk = createAsyncThunk(
  'user/userThunk',
  async (payload, thunkAPI) => {
      

    return thunkAPI.fulfillWithValue(payload);
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userThunk.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default userSlice.reducer;
