import React from "react";
import classes from "./Footer.module.css";
import PageLink from "../Mapping/utils/PageLink";
import SocialLink from "../Mapping/utils/SocialLink";
import { socialLinks, pageLinks } from "../Data/data";

const Footer = () => {
  return (
    <footer className={classes["footer-container"]}>
      <ul className={classes["footer-links"]}>
        {pageLinks.map((link) => {
          return (
            <PageLink
              key={link.id}
              {...link}
              linkClassName={classes["footer-link"]}
            />
          );
        })}
      </ul>
      <ul className={classes["footer-icons"]}>
        {socialLinks.map((link) => {
          return (
            <SocialLink
              key={link.id}
              linkClassName={classes["footer-icon"]}
              {...link}
            />
          );
        })}
      </ul>
      <p className={classes.copyright}>
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
