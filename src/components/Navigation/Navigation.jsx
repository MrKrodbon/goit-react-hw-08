import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import clsx from "clsx";
import { IoHome } from "react-icons/io5";

const buildCssClasses = ({ isActive }) =>
  clsx(styles.link, isActive && styles.active);

const Navigation = () => {
  return (
    <>
      <NavLink className={buildCssClasses} to="/">
        <IoHome className={styles.icon} />
        Home
      </NavLink>
    </>
  );
};

export default Navigation;
