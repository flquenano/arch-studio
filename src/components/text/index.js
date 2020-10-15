import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./text.css.js";

export const Text = ({ children }) => <Wrapper>{children}</Wrapper>;

Text.propTypes = {
  children: PropTypes.string.isRequired
};
