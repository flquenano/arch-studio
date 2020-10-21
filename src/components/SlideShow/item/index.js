import React from "react";
import PropTypes from "prop-types";
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
        <Button text="See Our Portfolio" />
      </Content>
    </Wrapper>
  );
};

Item.propTypes = {
  image: PropTypes.objectOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
