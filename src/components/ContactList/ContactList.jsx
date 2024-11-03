import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  // const filteredContacts = selectContacts.filter((filterContact) =>
  //   filterContact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
  // );

  return (
    <ul className={styles.selectContacts}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={styles.contactForm}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
