import styled from "styled-components";
import { animated } from "react-spring";
import Image from "gatsby-image";

export const Wrapper = styled(animated.div)`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Img = styled(Image)`
  position: relative;
  z-index: 998;
  height: 24rem;
  width: 100%;
  &::before {
    position: absolute;
    z-index: 999;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.35);
  }
  &::after {
    position: absolute;
    z-index: 1000;
    content: "";
    bottom: 0%;
    left: 0%;
    width: 91.46%;
    background: rgb(255, 255, 255);
    height: 4.5rem;
    @media ${(props) => props.theme.breakpoints.sm} {
      display: none;
    }
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 72rem;
    z-index: -1;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 63.5rem;
  }
`;
