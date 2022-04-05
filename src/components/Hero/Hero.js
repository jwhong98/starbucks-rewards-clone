import React from "react";
import classes from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.hero__container}>
        <div className={classes.hero__container__content}>
          <h2>
            free coffee
            <br />
            is a tap away
          </h2>
          <p>Join now to start earning Rewards.</p>
          <div className={classes.hero__container__content__join}>
            <button>Join now</button>
            <p>
              Or <span>join in the app</span> for the best experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
