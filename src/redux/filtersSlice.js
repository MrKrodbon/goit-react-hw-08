import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter: (state, actions) => {
      state.name = actions.payload;
    },
    selectNameFilter: (state, actions) => {
      return state.name;
    },
  },
});

export const { changeFilter, selectNameFilter } = slice.actions;

export default slice.reducer;
