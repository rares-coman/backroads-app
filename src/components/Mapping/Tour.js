import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Tour.module.css";

const Tour = ({
  id,
  image,
  date,
  tourTitle,
  info,
  location,
  duration,
  price,
  icon,
}) => {
  return (
    <article className={classes["tour-card"]} key={id}>
      <div className={classes["tour-img-container"]}>
        <img src={image} className={classes["tour-img"]} alt={tourTitle} />
        <p className={classes["tour-date"]}>{date}</p>
      </div>
      <div className={classes["tour-info"]}>
        <div className={classes["tour-title"]}>
          <h4>{tourTitle}</h4>
        </div>
        <p>{info}</p>
        <div className={classes["tour-footer"]}>
          <p>
            <span>
              <FontAwesomeIcon icon={icon} />
            </span>{" "}
            {location}
          </p>
          <p>{duration} days </p>
          <p>from ${price}</p>
        </div>
      </div>
    </article>
  );
};

export default Tour;
