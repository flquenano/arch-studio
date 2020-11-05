import styled from "styled-components";
import { animated } from "react-spring";
import Image from "gatsby-image";
import { Heading as DefaultHeading } from "../../Heading";
import { Text as DefaultText } from "../../Text";

export const Wrapper = styled(animated.div)`
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  @media ${(props) => props.theme.breakpoints.xs} {
    display: block;
    justify-content: none;
  }
`;

export const Img = styled(Image)`
  width: 100%;
  height: 100%;
  filter: brightness(0.6);
`;

export const Content = styled(animated.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
  width: clamp(31.1rem, 90%, 54.4rem);
  @media ${(props) => props.theme.breakpoints.xs} {
    display: inline;
    justify-content: none;
    left: 7.56%;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    left: 17.1%;
    top: 49.5%;
  }
`;

export const Heading = styled(DefaultHeading)`
  color: rgb(255, 255, 255);
  margin-bottom: 1.4rem;
`;

export const Text = styled(DefaultText)`
  color: rgb(255, 255, 255) !important;
  margin-bottom: 3rem;
  max-width: 44.5rem;
`;
