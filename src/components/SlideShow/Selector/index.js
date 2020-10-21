import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./selector.css.js";
import { Item } from "./item";

export const Selector = ({ active, setActive, cnt }) => {
  const items = [];

  const setactive = (idx) => {
    setActive(idx);
  };

  function createSelectors(cnt) {
    for (let i = 0; i < cnt; i++) {
      items.push(
        <Item key={cnt + i} active={active} setActive={setactive} cnt={i} />
      );
    }
  }
  createSelectors(cnt);
  return <Wrapper>{items.map((item) => item)}</Wrapper>;
};

Selector.propTypes = {
  active: PropTypes.number.isRequired,
  setActive: PropTypes.func.isRequired,
  cnt: PropTypes.number.isRequired
};
