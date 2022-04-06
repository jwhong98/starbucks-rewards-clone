import React from "react";
import Extras from "../Extras/Extras";
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
      <Extras />
    </main>
  );
};

export default Main;
