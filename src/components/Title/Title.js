import React from "react";
import classes from "./Title.module.css";

const Title = (props) => {
  return (
    <div className={classes["section-title"]}>
      <h2>
        {props.title}&nbsp;
        <span>{props.subTitle}</span>
      </h2>
    </div>
  );
};

export default Title;
