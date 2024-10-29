import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter: (state, actions) => {},
    selectNameFilter: (state, actions) => {},
  },
});

export const { changeFilter, selectNameFilter } = slice.actions;

export default slice.reducer;
