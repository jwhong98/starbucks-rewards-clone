import React from "react";
import classes from "./Favorites.module.scss";
import FavoritesCard from "./FavoritesCard";
import { reward2 } from "./data";

const Favorites = () => {
  return (
    <section className={classes.favorites}>
      <h2>Get your favorites for free</h2>

      <div className={classes.favorites__content}>
        <button className={classes.tablinks}>
          25<span>★</span>
        </button>
        <button className={`${classes.tablinks} ${classes.active}`}>
          50<span>★</span>
        </button>
        <button className={classes.tablinks}>
          150<span>★</span>
        </button>
        <button className={classes.tablinks}>
          200<span>★</span>
        </button>
        <button className={classes.tablinks}>
          400<span>★</span>
        </button>
      </div>
      <FavoritesCard {...reward2} />
    </section>
  );
};

export default Favorites;
