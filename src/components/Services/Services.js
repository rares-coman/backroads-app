import React from "react";
import Title from "../Title/Title";
import Service from "../Mapping/Service";
import classes from "./Services.module.css";
import { services } from "../Data/data";

const Services = () => {
  return (
    <section className={`${classes.section} ${classes.services}`} id="services">
      <Title title="our" subTitle="services" />
      <div className={`${classes.sectionCenter} ${classes.servicesCenter}`}>
        {services.map((service) => {
          return <Service key={service.id} {...service} />;
        })}
      </div>
    </section>
  );
};

export default Services;
