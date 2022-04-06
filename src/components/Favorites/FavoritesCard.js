import React from "react";
import classes from "./FavoritesCard.module.scss";

const FavoritesCard = (props) => {
  return (
    <div className={classes.favoritesCard}>
      <div className={classes.favoritesCard__container}>
        <div className={classes.favoritesCard__container__imgContainer}>
          <img src={props.img} alt="" />
        </div>
        <div className={classes.favoritesCard__container__content}>
          <h3>{props.title}</h3>
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
};

export default FavoritesCard;
