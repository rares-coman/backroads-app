import React from "react";
import { image, pageLinks, socialLinks } from "../Data/data";
import classes from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import PageLink from "../Mapping/utils/PageLink";
import SocialLink from "../Mapping/utils/SocialLink";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes["nav-center"]}>
        <div className={classes["nav-header"]}>
          <img src={image} className={classes["nav-logo"]} alt="backroads" />
          <button
            type="button"
            className={classes["nav-toggle"]}
            id="nav-toggle"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <ul className={classes["nav-links"]}>
          {pageLinks.map((link) => {
            return (
              <PageLink
                key={link.id}
                {...link}
                linkClassName={classes["nav-link"]}
              />
            );
          })}
        </ul>
        <ul className={classes["nav-icons"]}>
          {socialLinks.map((link) => {
            return (
              <SocialLink
                key={link.id}
                linkClassName={classes["nav-icon"]}
                {...link}
              />
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
