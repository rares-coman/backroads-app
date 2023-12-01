import React from "react";
import about from "../images/about.jpeg";
import Title from "../Title/Title";
import classes from "./About.module.css";
import { Link } from "react-scroll";
const About = () => {
  return (
    <section className={classes.section} id="about">
      <Title title="about" subTitle="us" />

      <div className={`${classes.sectionCenter} ${classes.aboutCenter}`}>
        <div className={classes["about-img"]}>
          <img
            src={about}
            className={classes["about-photo"]}
            alt="awesome beach"
          />
        </div>
        <article className={classes["about-info"]}>
          <h3>explore the difference</h3>
          <p>
            Golden sands meet azure waves, palm trees sway in the ocean breeze.
            A tropical haven, where sunsets paint the sky in warm hues—a serene
            escape by the beach.
          </p>
          <p>
            Sun-kissed beach, palms dancing in the breeze, whispers of paradise.
            Waves caress the shore, a symphony of serenity. Nature's canvas
            paints a tranquil escape, inviting you to unwind by the sea.
          </p>
          <Link to="about" className={classes["btn"]}>
            read more
          </Link>
        </article>
      </div>
    </section>
  );
};

export default About;
