import styled from "styled-components";
import { Text as DefaultText } from "../../Text";
import DefaultArrow from "../../../img/icon-arrow.svg";

export const Wrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 4rem;
  }
  @media ${(props) => props.theme.breakpoints.xs} {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    align-self: flex-end;
    width: 35rem;
    flex-direction: column;
    align-items: flex-start;
    &:not(:last-child) {
      margin-bottom: 0;
    }
  } ;
`;

export const Content = styled.div`
  margin-bottom: 1.6rem;
  @media ${(props) => props.theme.breakpoints.lg} {
    margin-bottom: 3.2rem;
  }
`;

export const Heading = styled(DefaultText)`
  font-weight: 700;
  line-height: 3.5rem;
  margin-bottom: 0.8rem;
`;

export const Text = styled(DefaultText)`
  line-height: 3.5rem;
`;

export const ButtonText = styled(DefaultText)`
  position: relative;
  font-weight: 700;
  opacity: 1;
  color: ${(props) => props.theme.colors.darkBlue};
  display: inline;
  vertical-align: middle;
  margin-right: 2.4rem;
  &::before {
    position: absolute;
    content: "";
    bottom: -2px;
    height: 2px;
    width: 100%;
    background: ${(props) => props.theme.colors.darkBlue};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
`;

export const Arrow = styled(DefaultArrow)`
  display: inline;
  vertical-align: middle;
  transition: transform 0.3s ease;
  transform: translateX(-15%);
`;

export const Button = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    ${Arrow} {
      transform: translateX(10%);
    }
    ${ButtonText} {
      &::before {
        transform: scaleX(1);
      }
    }
  }
  @media ${(props) => props.theme.breakpoints.xs} {
    top: 1.4rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    top: 0;
  }
`;
