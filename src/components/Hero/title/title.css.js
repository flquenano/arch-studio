import styled from "styled-components";
import { animated } from "react-spring";
import { Heading } from "../../Heading";

export const Wrapper = styled(animated.div)`
  position: absolute;
  top: 18.9rem;
  right: 0;
  z-index: 5;
  @media ${(props) => props.theme.breakpoints.md} {
    top: 11.7rem;
    text-align: right;
  }
`;

export const HeadingH1L = styled(Heading)``;
