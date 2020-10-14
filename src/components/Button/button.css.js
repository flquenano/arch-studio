import styled from "styled-components";
import DefaultArrow from "../../img/icon-arrow.svg";

export const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.darkBlue};
  display: inline-block;
  vertical-align: middle;
  color: rgb(255, 255, 255);
  padding: 2.4rem 3.2rem;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    transform: translateY(-3px);
    background: ${(props) => props.theme.colors.darkGrey};
  }
  &:active {
    transform: translateY(2px);
    background: ${(props) => props.theme.colors.lightGrey};
  }
`;

export const Arrow = styled(DefaultArrow)`
  display: inline-block;
  vertical-align: middle;
  margin-left: 2.4rem;
  g {
    stroke: rgb(255, 255, 255);
  }
`;
