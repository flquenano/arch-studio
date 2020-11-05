import styled from "styled-components";
import Image from "gatsby-image";
import { animated } from "react-spring";
import { Heading as DefaultHeading } from "../../Heading";
import { Text as DefaultText } from "../../Text";
import TT from "../../../img/icon-twitter.svg";
import Li from "../../../img/icon-linkedin.svg";

export const Wrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 4rem;
    @media ${(props) => props.theme.breakpoints.sm} {
      margin-bottom: 0;
    }
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
`;

export const ItemOverlay = styled(animated.div)`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: inline-grid;
  place-content: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const Img = styled(Image)`
  z-index: 1;
  width: 31.1rem;
  height: 28.4rem;
  margin-bottom: 2.4rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 28rem;
    height: 25.6rem;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 35rem;
    height: 32rem;
  }
`;
export const ProfileInfo = styled.div`
  position: relative;
`;

export const Name = styled(DefaultHeading)`
  margin-bottom: 0.4rem;
`;
export const Position = styled(DefaultText)`
  color: ${(props) => props.theme.colors.darkBlue};
  margin-bottom: 0.8rem;
`;

export const SNS = styled.div`
  position: relative;
`;
export const Twitter = styled(TT)`
  cursor: pointer;
  path {
    transition: 250ms;
    fill: ${(props) =>
      props.$ishover ? "rgb(255,255,255)" : props.theme.colors.darkBlue};
    &:hover {
      fill: ${(props) => props.theme.colors.lightGrey};
    }
  }
`;
export const LinkedIn = styled(Li)`
  margin-right: 2.56rem;
  cursor: pointer;
  path {
    transition: 250ms;
    fill: ${(props) =>
      props.$ishover ? "rgb(255,255,255)" : props.theme.colors.darkBlue};
    &:hover {
      fill: ${(props) => props.theme.colors.lightGrey};
    }
  }
`;
