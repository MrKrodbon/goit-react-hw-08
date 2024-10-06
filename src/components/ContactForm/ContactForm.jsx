import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";
import { useId } from "react";

const ContactForm = ({ onSetNewContact }) => {
  const nameFieldId = useId();
  const numberFiledId = useId();
  const phoneNumberRegex = /^\+380\s?\d{3}\s?\d{2}\s?\d{2}$/;

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too short name")
      .max(50, "Too long name")
      .required("Field name is required"),
    number: Yup.string()
      .required("Phone number reqired")
      .matches(phoneNumberRegex, "Phone number must match +380 XXX XX XX"),
  });

  //Need to add trim name

  const onSubmitFormHandle = (values, actions) => {
    actions.resetForm();
    onSetNewContact(values);
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={onSubmitFormHandle}
    >
      <Form className={styles.form}>
        <div className={styles.fieldContainer}>
          <label htmlFor={nameFieldId} className={styles.label}>
            Name
          </label>
          <Field
            type="text"
            name="name"
            id={nameFieldId}
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
          <label htmlFor={numberFiledId} className={styles.label}>
            Number
          </label>
          <Field
            type="text"
            name="number"
            id={numberFiledId}
            className={styles.formField}
            placeholder="+380 XXX XX XX"
          />
          <ErrorMessage
            className={styles.error}
            name="number"
            component="span"
          ></ErrorMessage>
        </div>
        <button type="submit" className={styles.submitBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
