import React from "react";
import PropTypes from "prop-types";
import { useSpring, config } from "react-spring";
import { Wrapper, Line, Text } from "./side.css.js";

export const SideTitle = ({ title }) => {
  const props = useSpring({
    from: {
      transform: "translateY(-20%)"
    },
    to: {
      transform: "translateY(0%)"
    },
    config: config.gentle
  });

  return (
    <Wrapper>
      <Line />
      <Text style={props}>{title}</Text>
    </Wrapper>
  );
};

SideTitle.propTypes = {
  title: PropTypes.string.isRequired
};
