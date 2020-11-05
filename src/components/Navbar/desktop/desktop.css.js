import styled from "styled-components";

export const Wrapper = styled.ul`
  color: ${(props) => props.theme.colors.mediumGrey};
  display: flex;
  justify-content: space-between;
  width: 31.5rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: clamp(7.884rem, 9.5vw, 9.484rem);
  }
`;

export const Item = styled.li`
  position: relative;
  display: inline;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2.5rem;
  transition: color 250ms;
  &::before {
    position: absolute;
    margin-left: 10%;
    padding: 0 2rem;
    content: "";
    bottom: -2px;
    height: 2px;
    width: 80%;
    background: ${(props) => props.theme.colors.darkBlue};
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
  }
  &:hover {
    color: ${(props) => props.theme.colors.darkBlue};
    &::before {
      transform: scaleX(1);
    }
  }
`;
