import React from "react";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

import styles from "./BurgerMenu.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const BurgerMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={styles.burgerMenuNavigationLinks}>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};

export default BurgerMenu;
