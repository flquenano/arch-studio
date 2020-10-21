import styled from "styled-components";
import { animated } from "react-spring";
import { Text as DefaultText } from "../../../Text";

export const Wrapper = styled(animated.div)`
  height: 4rem;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 8rem;
    width: 8rem;
  }
`;

export const Text = styled(DefaultText)`
  color: inherit;
  font-weight: 700;
`;
