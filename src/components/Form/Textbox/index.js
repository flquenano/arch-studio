import React, { useState } from "react";
import { useTransition } from "react-spring";
import PropTypes from "prop-types";
import { Wrapper, Label, Input, Underline, Warning } from "./textbox.css.js";

export const Textbox = ({ name, error, errMsg, inputRef }) => {
  const [value, setValue] = useState("");
  const warningTransition = useTransition(error, null, {
    from: {
      opacity: 0,
      transform: "translateX(-15%)"
    },
    enter: {
      opacity: 1,
      transform: "translateX(0%)"
    },
    leave: {
      opacity: 0,
      transform: "translateX(-15%)"
    }
  });

  return (
    <Wrapper>
      <Input
        type="text"
        id={name}
        name={name}
        $error={error}
        hasvalue={value}
        maxLength="30"
        ref={inputRef}
        onBlur={(e) => setValue(e.target.value)}
      />
      <Label htmlFor={name} $error={error}>
        {name}
      </Label>
      <Underline $error={error} />
      {warningTransition.map(({ item, key, props }) =>
        item ? (
          <Warning style={props} key={key}>
            {errMsg}
          </Warning>
        ) : undefined
      )}
    </Wrapper>
  );
};

Textbox.defaultProps = {
  error: false,
  errMsg: "Can't be empty",
  value: ""
};

Textbox.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.bool,
  errMsg: PropTypes.string,
  inputRef: PropTypes.object.isRequired
};
