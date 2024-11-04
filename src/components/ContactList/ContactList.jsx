import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/selectors";
import { useEffect } from "react";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  console.log(filteredContacts);
  // add try catch to fetchContacts here
  // useEffect(() => {}, []);
  return (
    <ul className={styles.selectContacts}>
      {Array.isArray(filteredContacts) &&
        filteredContacts.map((contact) => (
          <li key={contact.id} className={styles.contactForm}>
            <Contact contact={contact} />
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
