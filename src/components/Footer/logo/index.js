import React, { useState, useEffect } from "react";
import LogoLarge from "./logo-l.svg";
import LogoSmall from "./logo-s.svg";

import { Wrapper } from "./logo.css.js";

export const Logo = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const toggleSmallScreen = ({ matches }) => {
    if (matches) {
      return setIsSmallScreen(true);
    }
    setIsSmallScreen(false);
  };

  useEffect(() => {
    const screenQuery = window.matchMedia("(max-width: 1024px)");
    screenQuery.addEventListener("change", toggleSmallScreen);
    toggleSmallScreen(screenQuery);
    return () => {
      screenQuery.removeEventListener("change", toggleSmallScreen);
    };
  }, []);

  return <Wrapper>{isSmallScreen ? <LogoSmall /> : <LogoLarge />}</Wrapper>;
};
