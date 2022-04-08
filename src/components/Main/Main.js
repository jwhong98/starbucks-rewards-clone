import React from "react";
import Codes from "../Codes/Codes";
import Extras from "../Extras/Extras";
import Favorites from "../Favorites/Favorites";
import GetStarted from "../GetStarted/GetStarted";
import Hero from "../Hero/Hero";
import Stars from "../Stars/Stars";
import classes from "./Main.module.scss";

const Main = () => {
  return (
    <main className={classes.main}>
      <Hero />
      <GetStarted />
      <Favorites />
      <Extras />
      <Stars />
      <Codes />
    </main>
  );
};

export default Main;
