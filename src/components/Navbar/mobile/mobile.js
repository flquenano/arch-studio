import React from "react";
import PropTypes from "prop-types";
import { useSpring } from "react-spring";
import { Link } from "gatsby";
import { Wrapper, List, Item, Overlay } from "./mobile.css.js";
import { Heading } from "../../Heading";

export const Mobile = ({ navOpen }) => {
  const navSpring = useSpring({
    from: {
      opacity: 0,
      transform: "translateX(100%)"
    },
    opacity: navOpen ? 1 : 0,
    transform: navOpen ? "translateX(0%)" : "translateX(100%)"
  });
  const overlaySpring = useSpring({
    from: {
      opacity: 0,
      transform: "translateX(100%)"
    },
    opacity: navOpen ? 1 : 0,
    transform: navOpen ? "translateX(0%)" : "translateX(100%)"
  });
  return (
    <>
      <Wrapper style={navSpring}>
        <List>
          <Item>
            <Link to="/portfolio">
              <Heading size="H3">Portfolio</Heading>
            </Link>
          </Item>

          <Item>
            <Link to="/about">
              <Heading size="H3">About Us</Heading>
            </Link>
          </Item>

          <Item>
            <Link to="/contact">
              <Heading size="H3">Contact</Heading>
            </Link>
          </Item>
        </List>
      </Wrapper>
      <Overlay style={overlaySpring} />
    </>
  );
};

Mobile.propTypes = {
  navOpen: PropTypes.bool.isRequired
};
