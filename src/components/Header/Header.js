import React from "react";
import Navbar from "../Navbar/Navbar";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <Navbar />
      <div className={classes.header__banner}>
        <div className={classes.header__banner__container}>
          <h3>starbucks rewards</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
