import styles from "./UserMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

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
      <p className={styles.welcomeToUser}>Hello {userData.name}!</p>
      <button className={styles.logoutBtn} onClick={onLogoutHandle}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
