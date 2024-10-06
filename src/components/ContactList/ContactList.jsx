import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contactList, onDelete }) => {
  return (
    <ul className={styles.contactList}>
      {contactList.map((contact) => (
        <li key={contact.name} className={styles.contactForm}>
          <Contact contact={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
