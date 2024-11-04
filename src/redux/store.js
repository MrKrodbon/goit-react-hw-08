import { configureStore } from "@reduxjs/toolkit";

import contactReducer from "./contacts/contactsReducer";
import filterReducer from "./filter/filtersReducer";

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: filterReducer,
  },
});
