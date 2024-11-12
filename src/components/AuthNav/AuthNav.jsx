import { NavLink } from "react-router-dom";
import clsx from "clsx";
import styles from "./AuthNav.module.css";

const buildCssClasses = ({ isActive }) =>
  clsx(styles.link, isActive && styles.active);
const AuthNav = () => {
  return (
    <>
      <NavLink className={buildCssClasses} to="/register">
        Register
      </NavLink>
      <NavLink className={buildCssClasses} to="/login">
        LogIn
      </NavLink>
    </>
  );
};

export default AuthNav;
