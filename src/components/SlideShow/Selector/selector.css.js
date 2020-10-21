import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  bottom: -0.05rem;
  display: flex;
  justify-content: flex-start;
  @media ${(props) => props.theme.breakpoints.sm} {
    bottom: -0.05rem;
    left: -8rem;
  }
`;
