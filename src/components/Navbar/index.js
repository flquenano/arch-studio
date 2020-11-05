import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { Wrapper, Nav, Filler } from "./navbar.css.js";
import { MobileNav } from "./mobile";
import { Mobile } from "./mobile/mobile.js";
import { DesktopNav } from "./desktop";
import Logo from "../../img/logo.svg";

export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);
  const navToggle = () => setNavOpen((state) => !state);

  const handleMediaQuery = ({ matches }) => {
    if (!matches) {
      setSmallScreen(false);
      setNavOpen(false);
      return;
    }
    setSmallScreen(true);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    mediaQuery.addEventListener("change", handleMediaQuery);
    handleMediaQuery(mediaQuery);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQuery);
    };
  }, []);

  return (
    <>
      {navOpen ? <Filler /> : undefined}
      <Wrapper $mobilenavopen={navOpen}>
        <Nav>
          <Link to="/">
            <Logo />
          </Link>
          {smallScreen ? (
            <MobileNav navOpen={navOpen} navToggle={navToggle} />
          ) : (
            <DesktopNav />
          )}
        </Nav>
      </Wrapper>
      <Mobile navOpen={navOpen} />
    </>
  );
};
