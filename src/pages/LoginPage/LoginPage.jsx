import LoginForm from "../../components/LoginForm/LoginForm";

import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.loginPageWrapper}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
