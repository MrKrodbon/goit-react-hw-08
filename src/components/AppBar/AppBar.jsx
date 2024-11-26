import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { RxHamburgerMenu } from "react-icons/rx";

import styles from "./AppBar.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useState } from "react";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const onBurgerMenuClick = () => {
    setIsBurgerMenuOpen(true);
  };

  return (
    <header className={styles.header}>
      <Navigation />
      {/* {isLoggedIn && (
        <button onClick={onBurgerMenuClick} className={styles.burgerMenuBtn}>
          <RxHamburgerMenu />
        </button>
      )} */}
      {/* {isBurgerMenuOpen && <BurgerMenu />} */}

      <BurgerMenu />
      <div className={styles.appBarNavigationLinks}>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};

export default AppBar;
