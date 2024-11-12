import { NavLink } from "react-router-dom";
import clsx from "clsx";
import styles from "./UserMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const buildCssClasses = ({ isActive }) =>
  clsx(styles.link, isActive && styles.active);

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
    <div className={styles.usersNavigationWrapper}>
      <NavLink className={buildCssClasses} to="/contacts">
        Contacts
      </NavLink>
      <button className={styles.logoutBtn} onClick={onLogoutHandle}>
        Log out
      </button>
      <p className={styles.welcomeToUser}>Hello {userData.name}!</p>
    </div>
  );
};

export default UserMenu;
