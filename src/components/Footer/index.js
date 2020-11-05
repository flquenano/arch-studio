import React from "react";
import { Link } from "gatsby";
import { Wrapper, TestWrapper, Content, Button } from "./footer.css.js";
import { Logo } from "./logo";
import { Navigation } from "./nav";
export const Footer = () => (
  <Wrapper>
    <Content>
      <Logo />
      <TestWrapper>
        <Navigation />
        <Link to="/portfolio">
          <Button text="See Our Portfolio" />
        </Link>
      </TestWrapper>
    </Content>
  </Wrapper>
);
