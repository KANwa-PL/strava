import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getActivites } from "../utils/functions";

// Initial States
const initialActivities = {
  activities: null,
  status: "idle",
  error: null,
};

// Slice Actions
export const setActivites = createAsyncThunk(
  "activities/setActivities",
  async (arg, { getState }) => {
    const state = getState();
    const accessToken = state.token.token.access_token;
    const activities = await getActivites(accessToken);
    return activities;
  }
);

// Slice
const activitySlice = createSlice({
  name: "activities",
  initialState: initialActivities,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setActivites.pending, (state) => {
        state.status = "pending";
        state.error = false;
      })
      .addCase(setActivites.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.activities = action.payload;
      })
      .addCase(setActivites.rejected, (state) => {
        state.status = "rejected";
        state.error = true;
      });
  },
});

const { actions, reducer } = activitySlice;
export default activitySlice.reducer;
