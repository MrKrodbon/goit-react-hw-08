import React from "react";

import styles from "./Modal.module.css";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/contacts/slice";
import { IoMdClose } from "react-icons/io";

const Modal = () => {
  const dispatch = useDispatch();
  const onCloseModalHandler = () => {
    dispatch(closeModal());
  };
  return (
    <>
      <div className={styles.modalOverlay}>
        <div className={styles.modalWindow}>
          <div className={styles.modalHeader}>
            <div className={styles.modalTitle}>
              <p>Title modal</p>
              <button onClick={onCloseModalHandler} className={styles.closeBtn}>
                <IoMdClose />
              </button>
            </div>
            <div className={styles.modalBody}></div>
            <div className={styles.modalFooter}>
              <button>Cancel</button>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
