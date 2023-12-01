import React from "react";
import { Link } from "react-scroll";

const PageLink = ({ linkClassName, text, pathLink }) => {
  return (
    <li>
      <Link
        to={pathLink}
        smooth={true}
        duration={250}
        className={linkClassName}
      >
        {text}
      </Link>
    </li>
  );
};

export default PageLink;
