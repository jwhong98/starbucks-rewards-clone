import React from "react";
import classes from "./Questions.module.scss";

const Questions = () => {
  return (
    <section className={classes.questions}>
      <div className={classes.questions__container}>
        <div className={classes.questions__container__content}>
          <h2>Questions?</h2>
          <p>
            We want to help in any way we can. You can ask your barista anytime
            or we’ve answered the most commonly asked questions{" "}
            <a href="/">right over here</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Questions;
