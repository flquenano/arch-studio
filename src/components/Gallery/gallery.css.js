import styled from "styled-components";
import { Button as Btn } from "../Button";

export const Wrapper = styled.div`
  margin: 20rem auto 17.75rem; //
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 8.5%;
  @media ${(props) => props.theme.breakpoints.xs} {
    padding: 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0; //
    max-width: 140rem; //
  }
`;

//
export const WrapperIdx = styled.div`
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 8.5%;
  margin-bottom: 13.2rem;
  @media ${(props) => props.theme.breakpoints.xs} {
    padding: 0;
    margin-bottom: 20rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
    max-width: 120rem;
    margin-bottom: 13.2rem;
  }
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4.6rem;
  @media ${(props) => props.theme.breakpoints.xs} {
    margin-bottom: 8.5rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    margin-bottom: 6rem;
  }
`;

export const MobileBtn = styled(Btn)`
  @media ${(props) => props.theme.breakpoints.xs} {
    display: none;
  }
`;
export const DesktopBtn = styled(Btn)`
  display: none;
  @media ${(props) => props.theme.breakpoints.xs} {
    display: inline-flex;
  }
`;

export const Content = styled.div`
  position: relative;
  align-self: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media ${(props) => props.theme.breakpoints.md} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 3rem;
    grid-row-gap: 0.6rem;
  }
`;
