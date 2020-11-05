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
  const [showText, setShowText] = useState(true);
  const [showImage, setShowImage] = useState(true);
  const { ref, inView } = useInView({
    threshold: 0.8,
    triggerOnce: true
  });
  const textSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0%)" : "translateX(-20%)"
  });

  const imgSpring = useSpring({
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translateX(0%)" : "translateX(20%)"
    },
    from: {
      opacity: 0
    },
    delay: 300
  });
  const contentSpring = useSpring({
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0%)" : "translateY(20%)"
    },
    from: {
      opacity: 0
    },
    delay: 500
  });

  useEffect(() => {
    const imgQuery = window.matchMedia("(min-width: 1024px)");
    const textQuery = window.matchMedia("(min-width: 740px)");

    textQuery.addEventListener("change", textMediaQuery);
    textMediaQuery(textQuery);

    imgQuery.addEventListener("change", imgMediaQuery);
    imgMediaQuery(imgQuery);

    return () => {
      textQuery.removeEventListener("change", textMediaQuery);
      imgQuery.removeEventListener("change", imgMediaQuery);
    };
  }, []);

  const textMediaQuery = ({ matches }) => {
    setShowText(matches);
  };

  const imgMediaQuery = ({ matches }) => {
    setShowImage(matches);
  };

  return (
    <Wrapper ref={ref}>
      {showImage ? (
        <Img src={WelcomeImage} alt="Welcome" style={{ ...imgSpring }} />
      ) : null}

      {showText ? (
        <animated.div style={textSpring}>
          <HeadingH1L size="H1L">Welcome</HeadingH1L>
        </animated.div>
      ) : null}

      <Content style={contentSpring}>
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
