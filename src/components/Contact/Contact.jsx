import styles from "./Contact.module.css";
import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ contact: { id, name, number }, onDelete }) => {
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
        className={styles.contactControl}
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
