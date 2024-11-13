import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

import { NavLink } from "react-router-dom";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

import styles from "./Navigation.module.css";
import clsx from "clsx";
import { IoHome } from "react-icons/io5";

const buildCssClasses = ({ isActive }) =>
  clsx(styles.link, isActive && styles.active);

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <NavLink className={buildCssClasses} to="/">
        <IoHome className={styles.icon} />
        Home
      </NavLink>
      <div className={styles.navigationLinks}>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </>
  );
};

export default Navigation;
