import React from "react";
import classes from "./Stars.module.scss";
import { rowOne, rowThree, rowTwo } from "./data";
import StarsRow from "./StarsRow";

const Stars = () => {
  return (
    <section className={classes.stars}>
      <div className={classes.stars__container}>
        <h2>Cash or card, you earn Stars</h2>
        <p className={classes.stars__container__subtitle}>
          No matter how you pay, you can earn Stars with your morning coffee.
          Those Stars add up to (really delicious) Rewards.
        </p>
        <StarsRow {...rowOne} />
        <StarsRow {...rowTwo} />
        <StarsRow {...rowThree} />
      </div>
    </section>
  );
};

export default Stars;
