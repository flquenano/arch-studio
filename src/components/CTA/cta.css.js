import styled from "styled-components";
import { animated } from "react-spring";
import DefaultImg from "gatsby-image";
import { Heading as DefaultHeading } from "../Heading";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 20rem;
`;

export const Img = styled(DefaultImg)`
  height: 56rem;
  filter: brightness(0.6);
`;

export const Content = styled(animated.div)`
  width: clamp(31rem, 60%, 37rem);
  position: absolute;
  top: 50%;
  left: 8.5%;
  transform: translateY(-50%);
  @media ${(props) => props.theme.breakpoints.xs} {
    left: 7.6%;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    left: 17.1%;
  }
`;

export const Heading = styled(DefaultHeading)`
  color: rgb(255, 255, 255);
  margin-bottom: 3.2rem;
`;
