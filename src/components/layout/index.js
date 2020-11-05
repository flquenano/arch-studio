import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../GlobalStyles.js";
import { Theme } from "../Theme.js";
import { Container, Main } from "./layout.css.js";
import { Navbar } from "../Navbar";
import { SideTitle } from "../SideTitle";
import { Footer } from "../Footer";

export const Layout = ({ children, title }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Container>
      <Navbar />
      <SideTitle title={title} />
      <Main>{children}</Main>
    </Container>
    <Footer />
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};
