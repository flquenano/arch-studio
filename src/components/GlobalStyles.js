import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html{
    font-size: 10px;
    font-family: 'Spartan', sans-serif;
    box-sizing: border-box;
  }

  html, body{
    overflow-x: hidden;
  }

  *, *::before, *::after{
    box-sizing: inherit;
    transition: 250ms;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  img:not([alt]){
    border: 5px solid red;
  }

  ul,
  li,
  body,
  h1,
  h2,
  h3,
  a,
  p {
    margin: 0;
    padding: 0;
    border: none;
  }

  ul, li{
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
