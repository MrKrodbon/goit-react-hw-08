import { useEffect, useState } from "react";
import "./App.css";

import initialContacts from "./contactList.json";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  // const getContactFromStorage = () => {
  //   const savedContact = JSON.parse(window.localStorage.getItem("contactInfo"));
  //   if (savedContact === null || savedContact.length === 0) {
  //     return initialContacts;
  //   }
  //   return savedContact;
  // };

  // const saveContactToStorage = (contacts) => {
  //   localStorage.setItem("contactInfo", JSON.stringify(contacts));
  // };

  // const [contact, setContact] = useState(() => {
  //   return getContactFromStorage();
  // });

  // const onAddContact = (newContact) => {
  //   // setContact((prevContacts) => {
  //   //   return [...prevContacts, newContact];
  //   // });
  // };

  // const filteredContacts = contact.filter((filterContact) =>
  //   filterContact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
