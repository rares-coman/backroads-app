import React from "react";
import { socialLinks } from "../../Data/data";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialLink = ({ icon, linkClassName, pathLink }) => {
  return (
    <li>
      <Link
        to={pathLink}
        className={linkClassName}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={icon} />
      </Link>
    </li>
  );
};

export default SocialLink;
