import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 56rem;
  @media ${(props) => props.theme.breakpoints.xs} {
    height: 72rem;
  }
`;
