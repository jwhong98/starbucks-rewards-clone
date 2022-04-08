import React from "react";
import classes from "./StarsRow.module.scss";

const StarsRow = (props) => {
  return (
    <div className={classes.row}>
      <div className={classes.row__col1}>
        <p>{props.stars}★ per dollar</p>
        <p>{props.col1}</p>
      </div>
      <div className={classes.row__col2}>
        <div className={classes.imgWrap}>
          <img src={props.img2} alt="" />
        </div>
        <div className={classes.content}>
          <h3>{props.title2}</h3>
          <p>{props.content2}</p>
        </div>
      </div>
      <div className={classes.row__col2}>
        <div className={classes.imgWrap}>
          <img src={props.img3} alt="" />
        </div>
        <div className={classes.content}>
          <h3>{props.title3}</h3>
          <p>{props.content3}</p>
        </div>
      </div>
    </div>
  );
};

export default StarsRow;
