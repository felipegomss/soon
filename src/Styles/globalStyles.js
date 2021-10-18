import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,300;1,400&display=swap');
  body {
    margin: 0;
    padding: 0;
    background: #fff;
    color: #0D0D0D;
    font-family: 'Roboto', sans-serif;
  }
  p, h1, h2, h3, ul{
    margin: 0;
    list-style: none;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
`;

export const Main = styled.main`
  padding-top: 2.5em;
  @media (min-width: 760px) {
  }
`;

export const Loading = styled.div`
  width: 100%;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/assets/loading.svg");
  display: grid;
  place-items: center;
`;

export default GlobalStyle;
