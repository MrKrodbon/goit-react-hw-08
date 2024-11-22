import styles from "./Contact.module.css";
import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { selectIsModalOpen } from "../../redux/contacts/selectors";

import { FaRegTrashAlt } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import Modal from "../Modal/Modal";
import { useState } from "react";

const Contact = ({ contact: { id, name, number } }) => {
  const isModalOpen = useSelector(selectIsModalOpen);
  const dispatch = useDispatch();

  const onDeleteContactHandler = () => {
    dispatch(deleteContact(id));
  };
  const onEditContactHandler = () => {
    //  dispatch(deleteContact(id));
  };

  return (
    <div className={styles.contactWrapper}>
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
      <div className={styles.contactControlBtnsWrapper}>
        <button
          type="button"
          className={styles.contactEditBtn}
          onClick={onEditContactHandler}
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
      {isModalOpen && <Modal />}
    </div>
  );
};

export default Contact;
