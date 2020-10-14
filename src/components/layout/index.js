import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../GlobalStyles.js";
import { Theme } from "../Theme.js";
import { Container, Main } from "./layout.css.js";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

export const Layout = ({ children }) => (
  <ThemeProvider theme={Theme}>
    <Container>
      <GlobalStyle />
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </Container>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
