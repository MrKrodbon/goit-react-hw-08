import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/filter/selectors";
import { selectLoading } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { Loader } from "../Loader/Loader";

const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);

  return (
    <>
      {isLoading && <Loader />}
      <ul className={styles.contactList}>
        {Array.isArray(filteredContacts) &&
          filteredContacts.map((contact) => (
            <li key={contact.id}>
              <Contact contact={contact} className={styles.contactListItem} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default ContactList;
