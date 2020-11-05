import React from "react";
import { Link } from "gatsby";
import { Nav, Item } from "./nav.css.js";

export const Navigation = () => (
  <Nav>
    <Item>
      <Link to="/portfolio">Portfolio</Link>
    </Item>
    <Item>
      <Link to="/about">About Us</Link>
    </Item>
    <Item>
      <Link to="/contact">Contact</Link>
    </Item>
  </Nav>
);
