import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";
import clsx from "clsx";
import { IoHome } from "react-icons/io5";

const buildCssClasses = ({ isActive }) =>
  clsx(styles.link, isActive && styles.active);

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={styles.navigationLinks}>
      <NavLink className={buildCssClasses} to="/">
        <IoHome className={styles.icon} />
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildCssClasses} to="/contacts">
          Contacts
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
