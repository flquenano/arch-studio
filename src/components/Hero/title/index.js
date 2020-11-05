import React, { useState, useEffect } from "react";
import { useSpring } from "react-spring";
import PropTypes from "prop-types";
import { Wrapper, HeadingH1L } from "./title.css.js";

export const Title = ({ title }) => {
  const [showTitle, setShowTitle] = useState(false);

  const checkBigScreen = ({ matches }) => {
    if (matches) {
      return setShowTitle(true);
    }
    setShowTitle(false);
  };

  useEffect(() => {
    const titleMediaQuery = window.matchMedia("(min-width: 768px)");
    titleMediaQuery.addEventListener("change", checkBigScreen);
    checkBigScreen(titleMediaQuery);
    return () => {
      titleMediaQuery.removeEventListener("change", checkBigScreen);
    };
  }, [title]);

  const animation = useSpring({
    from: {
      opacity: 0,
      transform: "translateX(-15%)"
    },
    to: {
      opacity: showTitle ? 1 : 0,
      transform: showTitle ? "translateX(0%)" : "translateX(-15%)"
    }
  });

  return (
    <>
      {showTitle ? (
        <Wrapper style={animation}>
          <HeadingH1L size="H1L">{title}</HeadingH1L>
        </Wrapper>
      ) : undefined}
    </>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired
};
