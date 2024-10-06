import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";
import { useId } from "react";

const ContactForm = ({ onSetNewContact }) => {
  const nameFieldId = useId();
  const numberFiledId = useId();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too short name")
      .max(50, "Too long name")
      .required("Field name is required"),
  });

  const onSubmitFormHandle = (values, actions) => {
    actions.resetForm();
    onSetNewContact(values);
  };

  //need to add validation for number

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
          />
          <ErrorMessage name="name" component="span"></ErrorMessage>
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
          />
        </div>
        <button type="submit" className={styles.submitBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
