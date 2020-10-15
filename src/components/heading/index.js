import React from "react";
import PropTypes from "prop-types";
import { HeadingLarge, HeadingSmall, H2, H3 } from "./heading.css.js";

export const Heading = ({ size, children }) => {
  switch (size) {
    case "H1L":
      return <HeadingLarge>{children}</HeadingLarge>;
    case "H1S":
      return <HeadingSmall>{children}</HeadingSmall>;
    case "H2":
      return <H2>{children}</H2>;
    case "H3":
      return <H3>{children}</H3>;
    default:
      return <H2>Invalid Size!!</H2>;
  }
};

Heading.propTypes = {
  size: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};
