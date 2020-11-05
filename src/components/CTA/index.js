import React from "react";
import { useSpring } from "react-spring";
import { useInView } from "react-intersection-observer";
import { Link } from "gatsby";
import { Wrapper, Img, Content, Heading } from "./cta.css.js";
import { Button } from "../Button";

export const CTA = ({ title, image, button }) => {
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
    <Wrapper>
      <Img fluid={sources} loading="eager" />
      <Content>
        <Heading size="H2">{title}</Heading>
        <Link to="/about">
          <Button text={button} />
        </Link>
      </Content>
    </Wrapper>
  );
};
