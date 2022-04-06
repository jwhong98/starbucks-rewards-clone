import React from "react";
import Favorites from "../Favorites/Favorites";
import GetStarted from "../GetStarted/GetStarted";
import Hero from "../Hero/Hero";
import classes from "./Main.module.scss";

const Main = () => {
  return (
    <main className={classes.main}>
      <Hero />
      <GetStarted />
      <Favorites />
    </main>
  );
};

export default Main;
