import styled from "styled-components";
import { animated } from "react-spring";

export const Wrapper = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: -5.3rem;
  z-index: 9999;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    left: -8.8rem;
    // 7.6rem + 2.5rem from component size
  }
`;
export const Line = styled.div`
  width: 1px;
  height: 10.4rem;
  border-left: 1px solid ${(props) => props.theme.colors.lightGrey};
`;
export const Text = styled(animated.h1)`
  color: ${(props) => props.theme.colors.lightGrey};
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.5rem;
  letter-spacing: 1.5rem;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  text-transform: uppercase;
  margin-top: 4.8rem;
`;
