import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const selectContacts = useSelector((state) => state.contacts.items);

  // useEffect(() => {
  //    saveContactToStorage(contact);
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
  // }, [contact]);

  return (
    <ul className={styles.selectContacts}>
      {selectContacts.map((contact) => (
        <li key={contact.name} className={styles.contactForm}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
