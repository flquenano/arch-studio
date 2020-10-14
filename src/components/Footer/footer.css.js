import styled from "styled-components";
import DefaultLogo from "../../img/logo.svg";
import { Button as DefaultButton } from "../Button";

export const Wrapper = styled.footer`
  position: relative;
  width: 100%;
  background: ${(props) => props.theme.colors.veryLightGrey};
`;
export const Content = styled.div`
  position: relative;
  top: -6.1rem;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  padding: 4.8rem 3.2rem;
  background: ${(props) => props.theme.colors.darkBlue};
  display: inline-block;
`;

export const Button = styled(DefaultButton)``;

export const Nav = styled.ul`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2.5rem;
  color: ${(props) => props.theme.colors.mediumGrey};
  letter-spacing: 0.5px;
`;
export const NavItem = styled.li`
  cursor: pointer;
  margin-top: 3.2rem;

  &:last-child {
    margin-bottom: 3.2rem;
  }

  &:hover {
    color: ${(props) => props.theme.colors.darkBlue};
  }
`;
