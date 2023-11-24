import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialToken = {};

// Slice
const tokenSlice = createSlice({
  name: "token",
  initialState: initialToken,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

const { actions, reducer } = tokenSlice;
export const { setToken } = actions;
export default reducer;
