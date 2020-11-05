import styled from "styled-components";
import { Heading as DefaultHeading } from "../Heading";

export const Wrapper = styled.div`
  margin: 0 auto 7.2rem;
  width: 31rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media ${(props) => props.theme.breakpoints.xs} {
    width: clamp(31.1rem, 90%, 70rem);
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    height: 28rem;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const Heading = styled(DefaultHeading)`
  position: relative;
  padding-top: 6.7rem;
  width: 10rem;
  margin-bottom: 4.8rem;
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    height: 1px;
    width: 6.5rem;
    background: ${(props) => props.theme.colors.lightGrey};
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 35rem;
  }
`;
