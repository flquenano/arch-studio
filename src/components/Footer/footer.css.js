import styled from "styled-components";
import { Button as DefaultButton } from "../Button";

export const Wrapper = styled.footer`
  position: relative;
  margin: 0 auto;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    justify-content: flex-start;
    align-content: center;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 111rem;
  }
`;

export const Content = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 4.8rem;
  background: ${(props) => props.theme.colors.veryLightGrey};
  @media ${(props) => props.theme.breakpoints.sm} {
    top: -6.1rem;
    flex-direction: row;
    top: 0;
    /* height: 12rem; */
    margin: 0;
    width: 79.68%;
    padding-bottom: 0;
    align-items: center;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    flex-grow: 0;
    width: 88.64%;
    height: auto;
    max-width: 98.4rem;
  }
`;

export const LogoWrapper = styled.div`
  padding: 4.8rem 3.2rem;
  background: ${(props) => props.theme.colors.darkBlue};
  display: inline-block;
  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 8rem 5.2rem;
  }
`;

export const TestWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-grow: 1;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;

export const Button = styled(DefaultButton)`
  @media ${(props) => props.theme.breakpoints.sm} {
    position: absolute;
    right: -15.6rem;
    top: -2.5rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    right: -12.5rem;
    top: -2.25rem;
  }
`;
