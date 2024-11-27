import React from "react";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

import styles from "./BurgerMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Navigation from "../Navigation/Navigation";
import { RiCloseLargeFill } from "react-icons/ri";
import { onCloseBurgerMenu } from "../../redux/auth/slice";

const BurgerMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  const onBurgerMenuClose = () => {
    dispatch(onCloseBurgerMenu());
  };

  

  return (
    <div className={styles.burgerMenuNavigationLinks}>
      <div className={styles.closeBtnWrapper}>
        <RiCloseLargeFill
          className={styles.closeMobileMenuBtn}
          onClick={onBurgerMenuClose}
        />
      </div>

      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};

export default BurgerMenu;
