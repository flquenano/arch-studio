import styled from "styled-components";
import { animated } from "react-spring";

export const Wrapper = styled.fieldset`
  position: relative;
  width: 100%;
  margin: 0 0 4rem;
  padding: 0;
  border: none;
`;

export const Label = styled.label`
  position: absolute;
  left: 3.5rem;
  top: 0.6rem;
  font-size: 2rem;
  opacity: 0.5;
  color: ${(props) =>
    props.$error ? props.theme.colors.red : props.theme.colors.darkBlue};
  transition: all 0.3s ease;
  cursor: text;
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const Underline = styled.span`
  position: absolute;
  bottom: 2px;
  height: 3px;
  outline: none;
  left: 0;
  bottom: -1px;
  width: 100%;
  /* background: red; */
  background: ${(props) =>
    props.$error ? props.theme.colors.red : props.theme.colors.darkBlue};
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease;
`;

export const Warning = styled(animated.span)`
  position: absolute;
  right: 1.6rem;
  bottom: 2.3rem;
  white-space: nowrap;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.red};
  letter-spacing: 0.234px;
`;

export const Input = styled.input`
  position: relative;
  width: 100%;
  border: none;
  padding-bottom: 1.9rem;
  padding-left: 3.5rem;
  font-size: 2rem;
  letter-spacing: 0.321px;
  line-height: 2.7rem;
  outline: none;
  border-bottom: 1px solid
    ${(props) =>
      props.$error ? props.theme.colors.red : props.theme.colors.darkBlue};
  &:focus {
    & ~ ${Label} {
      transform: translateX(-25%);
      font-size: 1rem;
      left: 1.5rem;
      top: -1.5rem;
      & ~ ${Underline} {
        transform: scaleX(1);
      }
    }
  }

  ${({ hasvalue }) =>
    hasvalue &&
    `
    & ~ ${Label} {
      transform: translateX(-25%);
      font-size: 1rem;
      left: 1.5rem;
      top: -1.5rem;
      & ~ ${Underline} {
        transform: scaleX(1);
      }
    }
  `}
  &:required {
    box-shadow: none;
  }
  &:invalid {
    box-shadow: none;
  }
`;
