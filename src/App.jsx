import { useEffect, useState } from "react";
import "./App.css";

import initialContacts from "./contactList.json";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const getContactFromStorage = () => {
    const savedContact = JSON.parse(window.localStorage.getItem("contactInfo"));
    return savedContact || initialContacts;
  };

  const saveContactToStorage = (contacts) => {
    localStorage.setItem("contactInfo", JSON.stringify(contacts));
  };

  const [contact, setContact] = useState(() => {
    return getContactFromStorage();
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    saveContactToStorage(contact);
  }, [contact]);

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
