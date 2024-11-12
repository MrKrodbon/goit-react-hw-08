import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/filter/selectors";
import { selectLoading } from "../../redux/contacts/selectors";
import { Loader } from "../Loader/Loader";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);

  console.log("filtered contacts", filteredContacts);

  return (
    <>
      {isLoading && <Loader />}
      <ul className={styles.contactList}>
        {filteredContacts.length !== null ? (
          filteredContacts.map((contact) => (
            <li key={contact.id}>
              <Contact contact={contact} className={styles.contactListItem} />
            </li>
          ))
        ) : (
          <li>
            <p>There is no contacts yet</p>
          </li>
        )}
      </ul>
    </>
  );
};

export default ContactList;
