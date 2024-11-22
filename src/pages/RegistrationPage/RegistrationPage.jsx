import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

import styles from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  return (
    <div className={styles.registerPageWrapper}>
        <p className={styles.logo}>ContactBook</p>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
