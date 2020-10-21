import styled from "styled-components";
import { animated } from "react-spring";
import { Heading as DefaultHeading } from "../Heading";
import { Text as DefaultText } from "../Text";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 56rem;
  background-color: #ddd;
  @media ${(props) => props.theme.breakpoints.xs} {
    height: 72rem;
  }
`;
