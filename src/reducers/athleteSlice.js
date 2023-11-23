import { createSlice } from "@reduxjs/toolkit";

// Initial States
const initialAthlete = {};

// Slice
const athleteSlice = createSlice({
  name: "athlete",
  initialState: initialAthlete,
  reducers: {
    setAthlete: (state, action) => {
      state.athlete = action.payload;
    },
  },
});

const { actions, reducer } = athleteSlice;
export const { setAthlete } = actions;
export default reducer;
