import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "./instance";

// export const __GetTodaymission = createAsyncThunk(
//   "/missions/today-lists/__GetTodaymission",
//   async (payload, thunkAPI) => {
//     const data = await instance
//       .get("http://54.180.30.74/missions/today-lists")
//       .then((res) => {
//         console.log(res.data.data);
//       })
//       .catch((error) => console.log(error));
//     return thunkAPI.fulfillWithValue(data.data);
//   }
// );

export const __GetTodaymission = createAsyncThunk(
  "/missions/today-lists/__GetTodaymission",
  async () => {
    try {
      const response = await instance.get(
        "http://54.180.30.74/missions/today-lists"
      );
      const data = response.data.data;
      // console.log(data);
      return data;
    } catch (error) {}
  }
);

const missionItem = createSlice({
  name: "mission",
  initialState: {
    loaded: false,
    mission: [],
    // challenge: [],
    // daliy: [],
  },
  reducers: {},
  extraReducers: {
    [__GetTodaymission.fulfilled]: (state, action) => {
      state.loaded = true;
      state.mission = action.payload;
    },
  },
});

export const { signInAction } = missionItem.actions;
export default missionItem.reducer;
