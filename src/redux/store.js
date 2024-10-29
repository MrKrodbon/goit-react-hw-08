import { configureStore } from "@reduxjs/toolkit";

import contactReducer from "./contactsSlice";
import filterReducer from "./filtersSlice";

const INITIAL_STATE = {
  
  filters: {
    name: "",
  },
};

export default store = configureStore({
  reducer: { contactReducer, filterReducer },
});
