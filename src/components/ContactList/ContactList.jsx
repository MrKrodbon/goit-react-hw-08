import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import { selectLoading } from "../../redux/contacts/selectors";
import { Loader } from "../Loader/Loader";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);

  return (
    <>
      {isLoading && <Loader />}
      <ul className={styles.contactList}>
        {filteredContacts.length !== 0 ? (
          filteredContacts.map((contact) => (
            <li key={contact.id}>
              <Contact contact={contact} className={styles.contactListItem} />
            </li>
          ))
        ) : (
          <li>
            <h3>There is no contacts yet</h3>
          </li>
        )}
      </ul>
    </>
  );
};

export default ContactList;
