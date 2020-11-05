import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./form.css.js";

export const Form = ({ className, children, action, submit }) => (
  <Wrapper className={className} action={action} onSubmit={submit}>
    {children}
  </Wrapper>
);

Form.propTypes = {
  action: PropTypes.string.isRequired,
  submit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};
