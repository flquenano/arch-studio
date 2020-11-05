import React from "react";
import PropTypes from "prop-types";
import { HeadingLarge, HeadingSmall, H2, H3 } from "./heading.css.js";

export const Heading = ({ className, size, children }) => {
  switch (size) {
    case "H1L":
      return <HeadingLarge className={className}>{children}</HeadingLarge>;
    case "H1S":
      return <HeadingSmall className={className}>{children}</HeadingSmall>;
    case "H2":
      return <H2 className={className}>{children}</H2>;
    case "H3":
      return <H3 className={className}>{children}</H3>;
    default:
      return <H2 className={className}>Invalid Size!!</H2>;
  }
};

Heading.propTypes = {
  size: PropTypes.oneOf(["H1L", "H1S", "H2", "H3"]).isRequired,
  children: PropTypes.string.isRequired
};
