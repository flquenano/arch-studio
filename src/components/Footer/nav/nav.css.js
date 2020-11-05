import styled from "styled-components";

export const Nav = styled.ul`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2.5rem;
  color: ${(props) => props.theme.colors.mediumGrey};
  letter-spacing: 0.5px;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 31.5rem;
    margin: 0 4.1rem;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    margin-left: 8.2rem;
  }
`;

export const Item = styled.li`
  cursor: pointer;
  margin-top: 3.2rem;
  &:last-child {
    margin-bottom: 3.2rem;
    @media ${(props) => props.theme.breakpoints.sm} {
      margin-bottom: 0;
    }
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: inline;
    margin-top: 0;
  }
  &:hover {
    color: ${(props) => props.theme.colors.darkBlue};
  }
`;
