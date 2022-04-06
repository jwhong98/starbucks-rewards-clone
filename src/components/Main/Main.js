import React from "react";
import GetStarted from "../GetStarted/GetStarted";
import Hero from "../Hero/Hero";
import classes from "./Main.module.scss";

const Main = () => {
  return (
    <main className={classes.main}>
      <Hero />
      <GetStarted />
    </main>
  );
};

export default Main;
