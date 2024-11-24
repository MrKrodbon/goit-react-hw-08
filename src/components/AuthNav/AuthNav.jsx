import { NavLink } from "react-router-dom";
import clsx from "clsx";
import styles from "./AuthNav.module.css";
import { CiLogin } from "react-icons/ci";

const buildCssClasses = ({ isActive }) =>
  clsx(styles.link, isActive && styles.active);
const AuthNav = () => {
  return (
    <>
      <NavLink className={buildCssClasses} to="/register">
        Register
      </NavLink>
      <NavLink className={buildCssClasses} to="/login">
        Log In
        <CiLogin className={styles.icon} />
      </NavLink>
    </>
  );
};

export default AuthNav;
