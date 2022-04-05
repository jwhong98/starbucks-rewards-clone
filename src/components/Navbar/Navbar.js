import React from "react";
import classes from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <img src="" alt="logo" />
      <div className={classes.navbar__container}>
        <ul className={classes.navbar__menu}>
          <li className={classes.navbar__menu__item}>menu</li>
          <li className={classes.navbar__menu__item}>rewards</li>
          <li className={classes.navbar__menu__item}>gift cards</li>
        </ul>
        <div className={classes.navbar__actions}>
          <a href="/">
            <ion-icon name="location-sharp"></ion-icon>Find a store
          </a>
          <button className={classes.navbar__actions__button1}>Sign in</button>
          <button className={classes.navbar__actions__button2}>Join now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
