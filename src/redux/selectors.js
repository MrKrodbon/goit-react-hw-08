import { createSelector } from "@reduxjs/toolkit";
import { changeFilter } from "./filtersSlice";

export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, changeFilter],
  (contacts, filter) => {
    console.log(contacts);

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
