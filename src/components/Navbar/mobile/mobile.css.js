import styled from "styled-components";
import { animated } from "react-spring";

export const Wrapper = styled(animated.div)`
  position: fixed;
  z-index: 9999;
  top: 10.75rem;
  height: 100%;
  width: 100%;
`;

export const List = styled.ul`
  z-index: 2;
  position: absolute;
  right: 0;
  background: ${(props) => props.theme.colors.veryLightGrey};
  color: ${(props) => props.theme.colors.darkBlue};
  padding: 4.8rem;
  width: 34.2rem;
`;

export const Item = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 3.2rem;
  }
`;

export const Overlay = styled(animated.div)`
  position: fixed;
  z-index: 1;
  top: 10.75rem;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;
