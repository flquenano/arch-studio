import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Arrow } from "./button.css.js";

export const Button = ({ className, text, ...otherProps }) => (
  <Wrapper className={className} {...otherProps}>
    {text} <Arrow />
  </Wrapper>
);

Button.defaultProps = {
  text: ""
};

Button.propTypes = {
  text: PropTypes.string
};
