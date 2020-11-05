import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  padding: 4.8rem 3.2rem;
  transform: translateY(-50%);
  background: ${(props) => props.theme.colors.darkBlue};
  @media ${(props) => props.theme.breakpoints.sm} {
    transform: translateY(0%);
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 8rem 5.2rem;
  }
`;
