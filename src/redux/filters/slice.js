import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  name: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,

  reducers: {
    changeFilter: (state, actions) => {
      state.name = actions.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;
