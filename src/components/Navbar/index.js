import React, { useState } from "react";
import { useSpring } from "react-spring";
import { Wrapper, Nav } from "./navbar.css.js";
import { MobileNav } from "./mobile";
import Logo from "../../img/logo.svg";

export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navToggle = () => setNavOpen((state) => !state);
  // const navAnimation = useSpring({
  //   transform: navOpen ? `translate(100%, 100%)` : `translate(0, 0)`,
  //   opacity: navOpen ? 1 : 0
  // });

  return (
    <Wrapper>
      <Nav>
        <Logo />
        <MobileNav navOpen={navOpen} navToggle={navToggle} />
      </Nav>
    </Wrapper>
  );
};
