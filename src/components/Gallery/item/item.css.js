import styled from "styled-components";
import { animated } from "react-spring";
import Image from "gatsby-image";
import { Heading as DefaultHeading } from "../../Heading";
import { Text as DefaultText } from "../../Text";

export const Wrapper = styled(animated.div)`
  position: relative;
  margin-bottom: 2.4rem; //
  height: 24rem;
  @media ${(props) => props.theme.breakpoints.md} {
    height: 56rem;
  }
`;

export const Img = styled(Image)`
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 250ms;
  cursor: pointer;
  &:hover {
    &::after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      opacity: 0.6;
      background: rgba(255, 255, 255, 0.503415);
    }
  }
  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    transition: all 250ms;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.0001) 0.01%,
      rgba(0, 0, 0, 0.499044) 100%
    );
  }
`;

export const Content = styled(animated.div)`
  position: absolute;
  bottom: 2.4rem;
  left: 2.4rem;
  @media ${(props) => props.theme.breakpoints.xs} {
    bottom: 4rem;
    left: 4rem;
  }
`;

export const Heading = styled(DefaultHeading)`
  color: rgb(255, 255, 255);
`;

export const Number = styled(DefaultHeading)`
  display: none;
  @media ${(props) => props.theme.breakpoints.xs} {
    display: block;
    font-size: 20rem;
    position: absolute;
    top: 1.6rem; //
    right: 1.6rem; //
    opacity: 0.5;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: block;
    font-size: 20rem;
    position: absolute;
    top: 3rem; //
    right: 1.6rem; //
    opacity: 0.5;
  }
`;

export const Text = styled(DefaultText)`
  color: rgba(255, 255, 255, 0.75);
  margin-top: 0.75rem;
`;
