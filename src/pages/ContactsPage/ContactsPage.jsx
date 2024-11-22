import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import styles from "./ContactsPage.module.css";

import { useDispatch } from "react-redux";

import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";

const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.contactsPageWrapper}>
      <ContactForm />
      <div className={styles.contactsPageSearchWrapper}>
        <SearchBox />
        <ContactList />
      </div>
    </div>
  );
};

export default ContactsPage;
