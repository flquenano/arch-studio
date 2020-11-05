import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import WelcomeImage from "./image-welcome-3x.jpg";
import {
  Wrapper,
  Content,
  Img,
  Text,
  HeadingH1L,
  HeadingH2
} from "./welcome.css.js";

export const Welcome = () => {
  return (
    <Wrapper>
      <Img src={WelcomeImage} alt="Welcome" />

      <animated.div>
        <HeadingH1L size="H1L">Welcome</HeadingH1L>
      </animated.div>

      <Content>
        <HeadingH2 size="H2">Welcome to Arch Studio</HeadingH2>
        <Text>
          We have a unique network and skillset to help bring your projects to
          life. Our small team of highly skilled individuals combined with our
          large network put us in a strong position to deliver exceptional
          results.
        </Text>
        <Text>
          Over the past 10 years, we have worked on all kinds of projects. From
          stations to high-rise buildings, we create spaces that inspire and
          delight.
        </Text>
        <Text>
          We work closely with our clients so that we understand the intricacies
          of each project. This allows us to work in harmony the surrounding
          area to create truly stunning projects that will stand the test of
          time.
        </Text>
      </Content>
    </Wrapper>
  );
};
