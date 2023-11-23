import { configureStore, combineReducers } from "@reduxjs/toolkit";
import athlete from "../reducers/athleteSlice.js";
import token from "../reducers/tokenSlice.js";

const combinedReducers = combineReducers({
  athlete,
  token,
});

export const store = configureStore({
  reducer: combinedReducers,
});
