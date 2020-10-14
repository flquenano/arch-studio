import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Arrow } from "./button.css.js";

export const Button = ({ text, fill }) => (
  <Wrapper>
    {text} <Arrow />
  </Wrapper>
);

Button.defaultProps = {
  text: "",
  fill: false
};

Button.propTypes = {
  text: PropTypes.string,
  fill: PropTypes.bool
};
