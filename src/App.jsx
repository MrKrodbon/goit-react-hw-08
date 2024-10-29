import "./App.css";

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
