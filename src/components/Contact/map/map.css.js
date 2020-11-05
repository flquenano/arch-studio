import styled from "styled-components";
import Image from "gatsby-image";

export const Wrapper = styled.div`
  width: 100%;
  height: 36.7rem;
  margin: 7.2rem 0;
  @media ${(props) => props.theme.breakpoints.xs} {
    height: 56rem;
    margin: 20rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    margin: 16.3rem 0;
  }
`;
export const Img = styled(Image)``;
