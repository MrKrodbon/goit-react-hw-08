import { useState } from "react";
import "./App.css";

import initialContacts from "./contactList.json";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contact, setContact] = useState(initialContacts);
  const [filter, setFilter] = useState("");

  const onAddContact = (newContact) => {
    setContact((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const onDeleteContact = (contactId) => {
    console.log(contactId);

    setContact((prevContacts) => {
      return prevContacts.filter(
        (contactToFilter) => contactToFilter.id !== contactId
      );
    });
  };

  const filteredContacts = contact.filter((filterContact) =>
    filterContact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onSetNewContact={onAddContact} />
      <SearchBox value={filter} onFilteredContact={setFilter} />
      <ContactList contactList={filteredContacts} onDelete={onDeleteContact} />
    </div>
  );
}

export default App;
