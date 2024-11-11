import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/filter/selectors";
import { selectLoading } from "../../redux/contacts/selectors";
import { Loader } from "../Loader/Loader";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);

  console.log(filteredContacts);

  return (
    <>
      {isLoading && <Loader />}
      <ul className={css.contactList}>
        {filteredContacts.length !== 0 ? (
          filteredContacts.map((contact) => (
            <li key={contact.id}>
              <Contact contact={contact} className={css.contactListItem} />
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
