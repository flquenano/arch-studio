import styled from "styled-components";
import { Form as DefaultForm } from "../Form";
import { Heading } from "../Heading";
import { Button as Btn } from "../Button";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 7.2rem 8.53% 13.3rem;
  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    margin: 16rem 0;
  }
`;

export const Form = styled(DefaultForm)`
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    max-width: 73rem;
  }
`;

export const HeadingH2 = styled(Heading)`
  width: 20rem;
  margin-bottom: 4.8rem;
  @media ${(props) => props.theme.breakpoints.xs} {
    width: 50rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 31.53%;
    margin-right: 8rem;
  }
`;

export const Button = styled(Btn)`
  width: 8rem;
  height: 8rem;
  padding: 2.8rem 2.7rem;
  & > svg {
    margin: 0;
  }
`;
