import styles from "./UserMenu.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { IoLogOutOutline } from "react-icons/io5";

const UserMenu = () => {
  
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
      
      <button className={styles.logoutBtn} onClick={onLogoutHandle}>
        Log out
        <IoLogOutOutline className={styles.icon} />
      </button>
    </div>
  );
};

export default UserMenu;
