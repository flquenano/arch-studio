import styled from "styled-components";
import { animated } from "react-spring";
import Image from "gatsby-image";
import { Text as DefaultText } from "../Text";
import { Heading as DefaultHeading } from "../Heading";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  margin: 20rem 0;
  justify-content: center;
  @media ${(props) => props.theme.breakpoints.md} {
    justify-content: space-between;
  }
`;

export const Img = styled(Image)`
  position: relative;
  width: 54rem;
  height: 56.8rem;
`;

export const Content = styled(animated.div)`
  width: clamp(31.1rem, 82.93%, 57.4rem);
  padding-top: 6.8rem;

  @media ${(props) => props.theme.breakpoints.md} {
    padding-top: 9.9rem;
    width: 44.6rem;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    height: 1px;
    width: 6.5rem;
    background: ${(props) => props.theme.colors.lightGrey};
  }
`;

export const Heading = styled(DefaultHeading)`
  width: 35rem;
  margin-bottom: 2.9rem;
  @media ${(props) => props.theme.breakpoints.md} {
    margin-bottom: 5.75rem;
  }
`;

export const Text = styled(DefaultText)`
  &:not(:last-of-type) {
    margin-bottom: 2.5rem;
  }
`;
