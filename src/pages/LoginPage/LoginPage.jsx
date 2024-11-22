import LoginForm from "../../components/LoginForm/LoginForm";

import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.loginPageWrapper}>
      <div className={styles.loginDescription}>
        <p className={styles.logo}>ContactBook</p>
        <p className={styles.description}>Log in to start managing your contacts efficiently.</p>
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
