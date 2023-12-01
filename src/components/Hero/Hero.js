import React from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={classes["hero"]} id="home">
      <div className={classes["hero-banner"]}>
        <h1>backroads app</h1>
        <p>
          Navigate the road less traveled with our Backroads app. Discover
          hidden gems, scenic routes, and offbeat adventures, turning every
          drive into a memorable journey.
        </p>
        <a href="#tours" className={`${classes.btn} ${classes.heroBtn}`}>
          explore tours
        </a>
      </div>
    </section>
  );
};

export default Hero;
