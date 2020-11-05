import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { Wrapper, Img, Content, Heading, Text } from "./item.css.js";
import { Button } from "../../Button";

export const Item = ({ image, title, text, style }) => {
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
  return (
    <Wrapper style={style}>
      <Img fluid={sources} />
      <Content>
        <Heading size="H1S">{title}</Heading>
        <Text>{text}</Text>
        <Link to="/portfolio">
          <Button text="See Our Portfolio" />
        </Link>
      </Content>
    </Wrapper>
  );
};

Item.propTypes = {
  image: PropTypes.shape({
    desktop: PropTypes.object,
    tablet: PropTypes.object,
    mobile: PropTypes.object
  }),
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
