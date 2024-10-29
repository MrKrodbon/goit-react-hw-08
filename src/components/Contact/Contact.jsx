import styles from "./Contact.module.css";
import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const onDeleteContactHandler = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div className={styles.contactInfo}>
        <p className={styles.contactContent}>
          <IoMdPerson className={styles.icon} />
          {name}
        </p>
        <p className={styles.contactContent}>
          <FaPhoneAlt className={styles.icon} />
          {number}
        </p>
      </div>
      <button
        type="button"
        className={styles.contactControlBtn}
        onClick={onDeleteContactHandler}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
