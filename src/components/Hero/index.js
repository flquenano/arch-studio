import React from "react";
import { useSpring } from "react-spring";
import PropTypes from "prop-types";
import { Wrapper, Content, Text, HeadingH2 } from "./hero.css.js";

import { Title } from "./title";
import { Image } from "./image";

export const Hero = ({ image, title, subTitle, text }) => {
  const contentSpring = useSpring({
    from: {
      opacity: 0,
      transform: "translateX(15%)"
    },
    to: {
      opacity: 1,
      transform: "translateX(0%)"
    },
    delay: 500
  });

  return (
    <Wrapper>
      <Title title={title} />
      <Image image={image} />
      <Content style={contentSpring}>
        <HeadingH2 size="H2">{subTitle}</HeadingH2>
        <Text>{text}</Text>
      </Content>
    </Wrapper>
  );
};

Hero.propTypes = {
  image: PropTypes.exact({
    desktop: PropTypes.object.isRequired,
    tablet: PropTypes.object.isRequired,
    mobile: PropTypes.object.isRequired
  }).isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
