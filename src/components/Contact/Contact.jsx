import styles from "./Contact.module.css";
import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

import { FaRegTrashAlt } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import Modal from "../Modal/Modal";
import { selectIsModalOpen } from "../../redux/contacts/selectors";
import { openModal } from "../../redux/contacts/slice";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectIsModalOpen);

  const onDeleteContactHandler = () => {
    dispatch(deleteContact(contact.id));
  };

  const onOpenModalHandler = () => {
    dispatch(openModal());
  };

  return (
    <div className={styles.contactWrapper}>
      <div className={styles.contactInfo}>
        <p className={styles.contactContent}>
          <IoMdPerson className={styles.icon} />
          {contact.name}
        </p>
        <p className={styles.contactContent}>
          <FaPhoneAlt className={styles.icon} />
          {contact.number}
        </p>
      </div>
      <div className={styles.contactControlBtnsWrapper}>
        <button
          type="button"
          className={styles.contactEditBtn}
          onClick={onOpenModalHandler}
        >
          <FaUserEdit />
        </button>
        <button
          type="button"
          className={styles.contactDeleteBtn}
          onClick={onDeleteContactHandler}
        >
          <FaRegTrashAlt />
        </button>
      </div>
      {isModalOpen && <Modal contact={contact} />}
    </div>
  );
};

export default Contact;
