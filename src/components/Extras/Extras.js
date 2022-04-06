import React from "react";
import classes from "./Extras.module.scss";
import { data } from "./data";
import Card from "../Card/Card";

const Extras = () => {
  const createCard = (info) => {
    return (
      <Card
        key={info.id}
        img={info.img}
        title={info.title}
        content={info.content}
      />
    );
  };
  return (
    <section className={classes.extras}>
      <div className={classes.extras__container}>
        <h2>Endless Extras</h2>
        <p>
          Joining Starbucks Rewards means unlocking access to exclusive
          benefits. Say hello to easy
          <br /> ordering, tasty Rewards and - yes, free coffee.
        </p>
        <div className={classes.extras__container__content}>
          {data.map(createCard)}
        </div>
      </div>
    </section>
  );
};

export default Extras;
