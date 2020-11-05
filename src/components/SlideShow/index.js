import React, { useState, useEffect } from "react";
import { useTransition } from "react-spring";
import PropTypes from "prop-types";
import { Wrapper } from "./slideshow.css.js";
import { Item } from "./item";
import { Selector } from "./Selector";

export const SlideShow = ({ slideShow }) => {
  const [index, setIndex] = useState(0);
  const setActive = (idx) => {
    setIndex(idx);
  };

  useEffect(() => {
    const timeout = setInterval(
      () => setIndex((state) => (state + 1) % slideShow.length),
      5000
    );
    return () => {
      clearInterval(timeout);
    };
  }, [slideShow]);

  const transitions = useTransition(index, (idx) => idx, {
    from: { opacity: 0, transform: "translateX(5%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-5%)" }
  });

  return (
    <Wrapper>
      {transitions.map(({ item, props, key }) => {
        return (
          <Item
            key={key}
            style={props}
            image={slideShow[item].image}
            title={slideShow[item].heading}
            text={slideShow[item].text}
          />
        );
      })}
      <Selector active={index} setActive={setActive} cnt={slideShow.length} />
    </Wrapper>
  );
};

SlideShow.propTypes = {
  slideShow: PropTypes.arrayOf(
    PropTypes.exact({
      heading: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      image: PropTypes.objectOf(PropTypes.object).isRequired
    }).isRequired
  )
};
