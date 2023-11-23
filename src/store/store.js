import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reducer } from "../reducers/athleteSlice.js";
import { reducer } from "../reducers/tokenSlice.js";

const combinedReducers = combineReducers({
  athleteReducer: athleteReducer.reducer,
  tokenReducer: tokenReducer.reducer,
});

export const store = configureStore({
  reducer: combinedReducers,
});
