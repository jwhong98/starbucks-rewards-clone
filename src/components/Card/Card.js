import React from "react";
import classes from "./Card.module.scss";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <img src={props.img} alt="" />
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
};

export default Card;
