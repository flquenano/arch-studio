import React, { useState } from "react";
import { useTransition } from "react-spring";
import PropTypes from "prop-types";
import { Wrapper, Label, Input, Underline, Warning } from "./textarea.css.js";

export const TextArea = ({ name, error, inputRef }) => {
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
        maxLength="150"
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
            Can't be empty
          </Warning>
        ) : undefined
      )}
    </Wrapper>
  );
};

TextArea.defaultProps = {
  error: true,
  value: ""
};

TextArea.propTypes = {
  error: PropTypes.bool,
  name: PropTypes.string.isRequired,
  inputRef: PropTypes.object.isRequired
};
