import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./UserMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const buildCssClasses = ({ isActive }) => {
  clsx(css.link, isActive && css.active);
};

const UserMenu = () => {
  const userData = useSelector(selectUserData);

  const dispatch = useDispatch();

  const onLogoutHandle = () => {
    let isLogout = confirm("Are you sure you want to logout?");
    if (isLogout) {
      dispatch(logout());
    }
    return;
  };

  return (
    <>
      <NavLink className={buildCssClasses} to="/contacts">
        Contacts
      </NavLink>
      <NavLink className={buildCssClasses} to="/" onClick={onLogoutHandle}>
        Log out
      </NavLink>
      <p>Hello {userData.name}</p>
    </>
  );
};

export default UserMenu;
