import styled from "styled-components";
import { Heading as DefaultHeading } from "../Heading";

export const Wrapper = styled.div`
  margin: 20rem auto 16rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 31.1rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 57.2rem;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Content = styled.div`
  display: block;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1.1rem;
    grid-row-gap: 6.4rem;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    grid-column-gap: 3rem;
  }
`;
export const Heading = styled(DefaultHeading)`
  width: 20rem;
  margin-bottom: 6.4rem;
`;
export const Profile = styled.div`
  &:not(:last-child) {
    margin-bottom: 4rem;
    @media ${(props) => props.theme.breakpoints.sm} {
      margin-bottom: 0;
    }
  }
`;
