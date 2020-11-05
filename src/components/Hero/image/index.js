import React from "react";
import { useSpring } from "react-spring";
import PropTypes from "prop-types";
import { Wrapper, Img } from "./image.css.js";

export const Image = ({ image }) => {
  const sources = [
    {
      ...image.desktop.childImageSharp.fluid,
      media: "(min-width: 1024px)"
    },
    {
      ...image.tablet.childImageSharp.fluid,
      media: "(min-width: 540px)"
    },
    image.mobile.childImageSharp.fluid
  ];

  const imgSpring = useSpring({
    from: {
      opacity: 0,
      transform: "translateY(-15%)"
    },
    to: {
      opacity: 1,
      transform: "translateY(0%)"
    },
    delay: 300
  });

  return (
    <Wrapper style={imgSpring}>
      <Img fluid={sources} />
    </Wrapper>
  );
};

Image.propTypes = {
  image: PropTypes.exact({
    desktop: PropTypes.object.isRequired,
    tablet: PropTypes.object.isRequired,
    mobile: PropTypes.object.isRequired
  }).isRequired
};
