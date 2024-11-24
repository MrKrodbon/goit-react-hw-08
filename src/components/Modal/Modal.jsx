import styles from "./Modal.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/contacts/slice";
import { editContact } from "../../redux/contacts/operations";
import { selectContactToEdit } from "../../redux/contacts/selectors";

const Modal = () => {
  const dispatch = useDispatch();
  const contactToEdit = useSelector(selectContactToEdit);
  const { id, name, number } = contactToEdit;
  const onCloseModalHandler = () => {
    dispatch(closeModal());
  };

  const onModalSubmitHandler = (values, actions) => {
    const trimmedValues = {
      name: values.name.trim(),
      number: values.number.trim(),
    };

    dispatch(editContact({ contactId: id, fieldsToUpdate: trimmedValues }));
    dispatch(closeModal());
    actions.resetForm();
  };

  const phoneNumberRegex = /^\d{3}\s?\d{2}\s?\d{2}$/;

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too short name")
      .max(50, "Too long name")
      .required("Field name is required"),
    number: Yup.string()
      .required("Phone number reqired")
      .matches(phoneNumberRegex, "Phone number must match XXX XX XX"),
  });
  return (
    <>
      <div className={styles.modalOverlay}>
        <div className={styles.modalWindow}>
          <div className={styles.modalHeader}>
            <div className={styles.modalTitle}>
              <p>Edit contact {name}</p>
            </div>
            <div className={styles.modalBody}>
              <Formik
                initialValues={{ name: name, number: number }}
                validationSchema={validationSchema}
                onSubmit={onModalSubmitHandler}
              >
                <Form className={styles.form}>
                  <div className={styles.fieldContainer}>
                    <label className={styles.label}>New Name</label>
                    <Field
                      type="text"
                      name="name"
                      className={styles.formField}
                      placeholder="John Wick"
                    />
                    <ErrorMessage
                      className={styles.error}
                      name="name"
                      component="span"
                    ></ErrorMessage>
                  </div>
                  <div className={styles.fieldContainer}>
                    <label className={styles.label}>New Number</label>
                    <Field
                      type="text"
                      name="number"
                      className={styles.formField}
                      placeholder="XXX XX XX"
                    />
                    <ErrorMessage
                      className={styles.error}
                      name="number"
                      component="span"
                    ></ErrorMessage>
                  </div>
                  <div className={styles.controlBtnsWrapper}>
                    <button
                      className={styles.modalCancelBtn}
                      onClick={onCloseModalHandler}
                      type="button"
                    >
                      Cancel
                    </button>
                    <button className={styles.modalSubmitBtn} type="submit">
                      Submit
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
            <div className={styles.modalFooter}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
