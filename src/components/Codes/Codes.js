import React from "react";
import classes from "./Codes.module.scss";

const Codes = () => {
  return (
    <section className={classes.codes}>
      <div className={classes.codes__container}>
        <div className={classes.codes__container__content}>
          <h2>Star Codes</h2>
          <p>
            Yesssss. You’ve got Stars in your hand. Enter your code here and
            we’ll add Stars to your account.
          </p>
          <form action="" className="codes__container__form">
            <input type="text" placeholder="Enter your Star Code" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Codes;
