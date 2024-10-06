import styles from "./Contact.module.css";

const Contact = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <>
      <div className={styles.contactInfo}>
        <p className={styles.contactContent}>{name}</p>
        <p className={styles.contactContent}>{number}</p>
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
