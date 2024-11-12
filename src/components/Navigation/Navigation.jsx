import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import clsx from "clsx";

const buildCssClasses = ({ isActive }) =>
  clsx(styles.link, isActive && styles.active);

const Navigation = () => {
  return (
    <>
      <NavLink className={buildCssClasses} to="/">
        Home
      </NavLink>
    </>
  );
};

export default Navigation;
