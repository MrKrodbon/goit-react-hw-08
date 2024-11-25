import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";

import { addContact } from "../../redux/contacts/operations";
import toast, { Toaster } from "react-hot-toast";
import { selectContacts } from "../../redux/contacts/selectors";
import { FcInfo } from "react-icons/fc";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(selectContacts);
  //add function to check if contact has  already been added to the contact list
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

  const onSubmitFormHandle = (values, actions) => {
    let isDuplicateContact = false;
    const trimmedValues = {
      name: values.name.trim(),
      number: values.number.trim(),
    };

    contactList.forEach((item) => {
      if (item.name === trimmedValues.name) {
        isDuplicateContact = true;
        return;
      }
    });
    if (isDuplicateContact) {
      toast("Contact has already been added", { icon: <FcInfo /> });
      return;
    } else {
      dispatch(addContact(trimmedValues));
      toast.success("Contact added successfully ");
      actions.resetForm();
    }
  };

  return (
    <>
      <Toaster />
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={validationSchema}
        onSubmit={onSubmitFormHandle}
      >
        <Form className={styles.form}>
          <div className={styles.fieldContainer}>
            <label className={styles.label}>Name</label>
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
            <label className={styles.label}>Number</label>
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
          <button type="submit" className={styles.submitBtn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
