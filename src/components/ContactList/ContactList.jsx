import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const selectNameFilter = useSelector((state) => state.filters.name);
  const selectContacts = useSelector((state) => state.contacts.items);

  const filteredContacts = selectContacts.filter((filterContact) =>
    filterContact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
  );
  console.log(selectNameFilter);

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
