import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { apiLoginUser } from "../../redux/auth/operations.js";
import * as Yup from "yup";

import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  const INITIAL_VALUES = { email: "", password: "" };

  const onSubmitFormHandle = (values, actions) => {
    const trimmedValues = {
      email: values.email.trim(),
      password: values.password,
    };

    dispatch(apiLoginUser(trimmedValues));
    actions.resetForm();
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be valid")
      .required("Email name is required"),
    password: Yup.string()
      .min(7, "Password length must be at least 7 characters")
      .required("Password  is required"),
  });

  return (
    <div>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={validationSchema}
        onSubmit={onSubmitFormHandle}
      >
        <Form className={styles.form}>
          <div className={styles.fieldContainer}>
            <label className={styles.label}>Email</label>
            <Field
              type="text"
              name="email"
              className={styles.formField}
              placeholder="example@gmail.com"
            />
            <ErrorMessage
              className={styles.error}
              name="email"
              component="span"
            ></ErrorMessage>
          </div>
          <div className={styles.fieldContainer}>
            <label className={styles.label}>Password</label>
            <Field
              type="password"
              name="password"
              className={styles.formField}
            />
            <ErrorMessage
              className={styles.error}
              name="password"
              component="span"
            ></ErrorMessage>
          </div>
          <div className={styles.fieldContainer}></div>
          <button type="submit" className={styles.submitBtn}>
            Log in
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
