import React, { useState } from "react";
import classes from "./Favorites.module.scss";
import FavoritesCard from "./FavoritesCard";
import { data } from "./data";

const Favorites = () => {
  const [display, setDisplay] = useState(1);

  const onClickHandler = (e) => {
    const btns = document.querySelectorAll("button");
    btns.forEach((btn) => {
      btn.classList.remove(classes.active);
    });
    e.target.classList.add(classes.active);
    setDisplay(Number(e.target.value));
  };
  return (
    <section className={classes.favorites}>
      <h2>Get your favorites for free</h2>

      <div className={classes.favorites__content}>
        <button className={classes.tablinks} value="0" onClick={onClickHandler}>
          25<span>★</span>
        </button>
        <button
          className={`${classes.tablinks} ${classes.active}`}
          value="1"
          onClick={onClickHandler}
        >
          50<span>★</span>
        </button>
        <button className={classes.tablinks} value="2" onClick={onClickHandler}>
          150<span>★</span>
        </button>
        <button className={classes.tablinks} value="3" onClick={onClickHandler}>
          200<span>★</span>
        </button>
        <button className={classes.tablinks} value="4" onClick={onClickHandler}>
          400<span>★</span>
        </button>
      </div>
      <FavoritesCard {...data[display]} />
    </section>
  );
};

export default Favorites;
