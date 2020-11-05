import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.xs} {
    width: 77.1%;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 82.56;
  }
  @media ${(props) => props.theme.breakpoints.xl} {
    padding: 0;
    max-width: 111rem;
  }
`;

export const Main = styled.main`
  width: 100%;
  max-width: 111rem;
`;
