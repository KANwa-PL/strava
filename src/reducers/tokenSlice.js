import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { extractAuthorizationCode, getData } from "../utils/functions";

// Initial State
const initialToken = {
  token: null,
  status: "idle",
  error: null,
};

// Slice Actions
export const getTokens = createAsyncThunk("tokens/getTokens", async () => {
  const authorization_code = extractAuthorizationCode(window.location.href);
  console.log("authorization_code " + authorization_code);
  const token = await getData(authorization_code);
  console.log("token " + token.token);
  return token;
});

// Slice
const tokenSlice = createSlice({
  name: "token",
  initialState: initialToken,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTokens.pending, (state) => {
        state.status = "pending";
        state.error = false;
      })
      .addCase(getTokens.fulfilled, (state, action) => {
        state.status = "success";
        state.token = action.payload;
      })
      .addCase(getTokens.rejected, (state) => {
        state.status = "rejected";
        state.error = true;
      });
  },
});

const { actions, reducer } = tokenSlice;
export default reducer;
