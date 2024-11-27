import { useDispatch, useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiHandWavingLight } from "react-icons/pi";

import styles from "./AppBar.module.css";
import {
  selectIsBurgerMenuOpen,
  selectIsLoggedIn,
  selectUserData,
} from "../../redux/auth/selectors";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { onCloseBurgerMenu, onOpenBurgerMenu } from "../../redux/auth/slice";
import clsx from "clsx";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isBurgerMenuOpen = useSelector(selectIsBurgerMenuOpen);
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  const onBurgerMenuClick = () => {
    dispatch(onOpenBurgerMenu());
  };

  const onHideOverlayHandler = () => {
    dispatch(onCloseBurgerMenu());
  };

  const openBurgerMenuStyles = (isOpen) =>
    clsx(styles.burgerMenu, { [styles.isOpen]: isOpen });

  const showOverlay = (isOpen) =>
    clsx(styles.overlay, { [styles.isOpen]: isOpen });

  return (
    <header className={styles.header}>
      {isLoggedIn && (
        <p className={styles.welcomeToUser}>
          <PiHandWavingLight className={styles.icon} />
          Hello, {userData.name}!
        </p>
      )}
      <div className={styles.mobileNavigation}>
        <button onClick={onBurgerMenuClick}>
          <RxHamburgerMenu />
        </button>
        <div
          className={showOverlay(isBurgerMenuOpen)}
          onClick={onHideOverlayHandler}
        >
          <div className={openBurgerMenuStyles(isBurgerMenuOpen)}>
            {isBurgerMenuOpen && <BurgerMenu />}
          </div>
        </div>
      </div>
      <div className={styles.navigation}>
        <Navigation />
        <div className={styles.appBarNavigationLinks}>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </div>
    </header>
  );
};

export default AppBar;
