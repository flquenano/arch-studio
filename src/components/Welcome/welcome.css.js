import styled from "styled-components";
import { animated } from "react-spring";
import { Heading as DefaultHeading } from "../Heading";
import { Text as DefaultText } from "../Text";

export const Wrapper = styled.div`
  margin: 7.2rem auto 9.7rem;
  position: relative;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 114rem;
  }
  &::after {
    content: "";
    position: absolute;
    width: 65px;
    top: 0;
    left: 8.5%;
    border-top: 1px solid ${(props) => props.theme.colors.lightGrey};
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

export const Img = styled(animated.img)`
  position: absolute;
  top: 12.25rem;
  bottom: 0;
  right: 0;
  z-index: -1;
`;

export const Content = styled(animated.div)`
  position: relative;
  padding: 6.7rem 8.5% 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0;
    width: 100%;
    max-width: 58rem;
    top: -2.65rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 44.6rem;
    max-width: 44.6rem;
    left: 0;
    top: 0;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    left: 19rem;
  }
`;

export const Text = styled(DefaultText)`
  max-width: 57.2rem;
  text-align: start;
  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }
`;

export const HeadingH1L = styled(DefaultHeading)`
  position: relative;
  @media ${(props) => props.theme.breakpoints.md} {
    position: relative;
    top: 2rem;
    left: 0;
    z-index: 5;
  }
`;
export const HeadingH2 = styled(DefaultHeading)`
  padding-bottom: 5.6rem;
  max-width: 44.6rem;
`;
