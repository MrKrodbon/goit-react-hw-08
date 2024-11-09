import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const buildCssClasses = ({ isActive }) => {
  clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  return (
    <>
      <NavLink className={buildCssClasses} to="/">
        Home
      </NavLink>
      <NavLink className={buildCssClasses} to="/contacts">
        Contacts
      </NavLink>
    </>
  );
};

export default Navigation;
