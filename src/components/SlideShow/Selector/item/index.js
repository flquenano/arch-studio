import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSpring } from "react-spring";
import { Wrapper, Text } from "./item.css.js";

export const Item = ({ active, setActive, cnt }) => {
  const [hover, setHover] = useState(false);

  const isActive = active === cnt;

  const itemSpring = useSpring({
    from: {
      background: "rgb(255,255,255)"
    },
    to: {
      background: isActive ? "rgb(27,29,35)" : "rgb(255,255,255)",
      color: isActive ? "rgb(255,255,255)" : "rgb(125,130,143)",
      filter: `brightness(${hover && !isActive ? 0.7 : 1})`
    }
  });

  const setNewActive = (idx) => {
    setActive(idx);
  };

  const number = `0${cnt + 1}`;

  return (
    <Wrapper
      style={itemSpring}
      onClick={() => setNewActive(cnt)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Text>{number}</Text>
    </Wrapper>
  );
};

Item.propTypes = {
  active: PropTypes.number.isRequired,
  setActive: PropTypes.func.isRequired,
  cnt: PropTypes.number.isRequired
};
