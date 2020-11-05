import styled from "styled-components";
export const Wrapper = styled.header`
  z-index: 999;
  width: 100%;
  padding: 0 8.53%;
  background: rgb(255, 255, 255);
  @media ${(props) => props.theme.breakpoints.xs} {
    padding: ${(props) => (props.$mobilenavopen ? "0 11.45%" : "0")};
  }
  ${({ $mobilenavopen }) =>
    $mobilenavopen &&
    `
    position: fixed;
  `}
`;
export const Nav = styled.nav`
  padding: 3.2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    justify-content: flex-start;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 5.4rem 0;
  }
`;

export const Filler = styled.div`
  width: 100%;
  height: 10.8rem;
`;
