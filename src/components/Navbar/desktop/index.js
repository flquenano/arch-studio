import React from "react";
import { Link } from "gatsby";
import { Wrapper, Item } from "./desktop.css.js";

export const DesktopNav = () => (
  <Wrapper>
    <Item>
      <Link to="/portfolio">Portfolio</Link>
    </Item>
    <Item>
      <Link to="/about">About Us</Link>
    </Item>
    <Item>
      <Link to="/contact">Contact</Link>
    </Item>
  </Wrapper>
);
