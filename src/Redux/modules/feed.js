import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = { Feed: [] };
const URL = process.env.REACT_APP_URL;

export const FeedThunk = createAsyncThunk(
    'Feed/FeedThunk',
    async (payload, thunkAPI) => {
        const FeedList = axios.get(`${URL}/feed`).then((res)=>res.data.data)
        
      return thunkAPI.fulfillWithValue(FeedList);
    }
  );

const FeedSlice = createSlice({
  name: 'Feed',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FeedThunk.fulfilled, (state, action) => {
      state.Feed = action.payload;
    });
  },
});

export default FeedSlice.reducer;
