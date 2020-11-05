import styled from "styled-components";
import { animated } from "react-spring";
import Image from "gatsby-image";
import { Heading as DefaultHeading } from "../Heading";
import { Text as DefaultText } from "../Text";

export const AniWrapper = styled(animated.div)`
  position: relative;
  z-index: 9999;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10rem 0;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
    margin: 0 0 10rem;
  }
`;

export const ImgWrapper = styled(animated.div)`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Img = styled(Image)`
  position: relative;
  z-index: 998;
  height: 24rem;
  width: 100%;
  filter: brightness(0.7);
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 72rem;
    z-index: -1;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 63.5rem;
  }
`;

export const ImgBar = styled.div`
  position: absolute;
  bottom: 0%;
  left: 0%;
  width: 91.46%;
  background: rgb(255, 255, 255);
  height: 4.5rem;
  z-index: 999;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

export const Content = styled(animated.div)`
  position: relative;
  background: rgb(255, 255, 255);
  width: clamp(31.1rem, 83.07%, 79.3rem);
  margin: 3.5rem 0 7.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  @media ${(props) => props.theme.breakpoints.sm} {
    position: absolute;
    bottom: 0;
    right: -5.7rem;
    margin: 0;
    padding: 16.3rem 0 0 5.9rem;
    width: 57.2rem;
    height: 43.1rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 25.5rem 16.5rem 0 18.2rem;
    width: 79.3rem;
    height: 50.3rem;
    right: -16.5rem;
    bottom: 0;
  }
  &::after {
    position: absolute;
    top: 8.8rem;
    left: 5.9rem;
    content: "";
    height: 1px;
    width: 6.5rem;
    display: none;
    background: ${(props) => props.theme.colors.lightGrey};
    @media ${(props) => props.theme.breakpoints.sm} {
      display: block;
    }
    @media ${(props) => props.theme.breakpoints.md} {
      top: 16rem;
      left: 18.3rem;
    }
  }
`;

export const HeadingH1L = styled(DefaultHeading)`
  position: absolute;
  top: 18.9rem;
  right: 0;
  z-index: 5;
  @media ${(props) => props.theme.breakpoints.md} {
    top: 11.7rem;
    text-align: right;
  }
`;

export const HeadingH2 = styled(DefaultHeading)`
  padding-bottom: 1.2rem;
  max-width: 45.6rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding-bottom: 3.5rem;
  }
`;

export const Text = styled(DefaultText)`
  max-width: 47rem;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 45.5rem;
  }
`;
