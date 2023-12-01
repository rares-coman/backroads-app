import React from "react";
import { tours } from "../Data/data";
import Title from "../Title/Title";
import classes from "./Tours.module.css";
import Tour from "../Mapping/Tour";

const Tours = () => {
  return (
    <section className={classes.section} id="tours">
      <Title title="featured" subTitle="tours" />
      <div className={`${classes.sectionCenter} ${classes.featuredCenter}`}>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
