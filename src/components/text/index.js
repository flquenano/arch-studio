import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./text.css.js";

export const Text = ({ className, children }) => (
  <Wrapper className={className}>{children}</Wrapper>
);

Text.propTypes = {
  children: PropTypes.node.isRequired
};
