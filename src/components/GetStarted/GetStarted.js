import React from "react";
import Card from "../Card/Card";
import classes from "./GetStarted.module.scss";
import { data } from "./startedData";

const GetStarted = () => {
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
    <section className={classes.getStarted}>
      <div className={classes.getStarted__container}>
        <h2>Getting started is easy</h2>
        <p>Earn Stars and get rewarded in a few easy steps.</p>
        <div className={classes.getStarted__container__steps}>
          {data.map(createCard)}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
