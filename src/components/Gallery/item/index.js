import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { Wrapper, Content, Img, Number, Heading, Text } from "./item.css.js";

export const Item = ({ name, desc, image, number, trail }) => {
  const source = [
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
    <Link to="/portfolio">
      <Wrapper style={trail}>
        <Img fluid={source} alt="Featured Work" />
        {number ? <Number size="H1L">{number}</Number> : null}
        <Content>
          <Heading size="H3">{name}</Heading>
          {desc ? <Text>{desc}</Text> : null}
        </Content>
      </Wrapper>
    </Link>
  );
};

Item.defaultProps = {
  number: false,
  desc: false
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string,
  image: PropTypes.object.isRequired,
  trail: PropTypes.object.isRequired
};
