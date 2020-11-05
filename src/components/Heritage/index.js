import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSpring } from "react-spring";
import { useInView } from "react-intersection-observer";
import { Wrapper, Img, Content, Heading, Text } from "./heritage.css.js";

export const Heritage = ({ image, title, body }) => {
  const [showImage, setShowImage] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.8,
    triggerOnce: true
  });

  const toggleImage = ({ matches }) => {
    if (!matches) {
      return setShowImage(false);
    }
    setShowImage(true);
  };

  const contentSpring = useSpring({
    from: {
      opacity: 0,
      transform: "translateX(-15%)"
    },
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0%)" : "translateX(-15%)"
  });

  useEffect(() => {
    const imageMediaQuery = window.matchMedia("(min-width: 1024px)");
    imageMediaQuery.addEventListener("change", toggleImage);
    toggleImage(imageMediaQuery);
    return () => {
      imageMediaQuery.removeEventListener("change", imageMediaQuery);
    };
  }, []);

  return (
    <Wrapper ref={ref}>
      <Content style={contentSpring}>
        <Heading size="H2">{title}</Heading>
        <Text>{body.p1}</Text>
        <Text>{body.p2}</Text>
        <Text>{body.p3}</Text>
      </Content>
      {showImage ? <Img fluid={image.childImageSharp.fluid} /> : null}
    </Wrapper>
  );
};

Heritage.propTypes = {
  image: PropTypes.shape({
    desktop: PropTypes.object,
    tablet: PropTypes.object,
    mobile: PropTypes.object
  }),
  title: PropTypes.string.isRequired,
  body: PropTypes.object.isRequired
};
