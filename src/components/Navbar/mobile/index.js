import React from "react";
import PropTypes from "prop-types";
import Hamburger from "../../../img/icon-hamburger.svg";
import Close from "../../../img/icon-close.svg";

export const MobileNav = ({ navOpen, navToggle }) => {
  return (
    <>
      {!navOpen ? (
        <Hamburger onClick={navToggle} />
      ) : (
        <Close onClick={navToggle} />
      )}
    </>
  );
};

MobileNav.propTypes = {
  navOpen: PropTypes.bool.isRequired,
  navToggle: PropTypes.func.isRequired
};
