import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./UserMenu.module.css";
import { useSelector } from "react-redux";
import { selectUserData } from "../../redux/auth/selectors";

const buildCssClasses = ({ isActive }) => {
  clsx(css.link, isActive && css.active);
};

const UserMenu = () => {
  const userData = useSelector(selectUserData);

  return (
    <>
      <NavLink className={buildCssClasses} to="/contacts">
        Contacts
      </NavLink>
      <NavLink className={buildCssClasses} to="/">
        Log out
      </NavLink>
      <p>Hello {userData.name}</p>
    </>
  );
};

export default UserMenu;
