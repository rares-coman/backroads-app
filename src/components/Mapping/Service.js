import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Service.module.css";

const Service = ({ id, icon, title, description }) => {
  return (
    <article className={classes["service"]} key={id}>
      <span className={classes["service-icon"]}>
        <FontAwesomeIcon icon={icon} />
      </span>
      <div className={classes["service-info"]}>
        <h4 className={classes["service-title"]}>{title}</h4>
        <p className={classes["service-text"]}>{description}</p>
      </div>
    </article>
  );
};

export default Service;
