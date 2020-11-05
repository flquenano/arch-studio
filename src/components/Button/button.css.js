import styled from "styled-components";
import DefaultArrow from "../../img/icon-arrow.svg";

export const Wrapper = styled.button`
  background: ${(props) => props.theme.colors.darkBlue};
  display: inline-flex;
  outline: none;
  border: none;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  white-space: nowrap;
  color: rgb(255, 255, 255);
  padding: 2.8rem 3.8rem;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  transition: 250ms;
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
  margin-left: 2.5rem;
  g {
    stroke: rgb(255, 255, 255);
  }
`;
