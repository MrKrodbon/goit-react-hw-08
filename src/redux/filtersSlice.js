import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: [],
  reducers: {
    changeFilter: (state, actions) => {
      state.name = actions.payload;
    },
  },
});

export const { changeFilter } = slice.actions;

export default slice.reducer;
