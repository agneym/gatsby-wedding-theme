import { createGlobalStyle } from "styled-components";
import "sal.js/dist/sal.css";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Great+Vibes|Montserrat&display=swap');
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    margin: 0;
    font-family: ${props => props.theme.fonts.main};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.heading};
  }
  ::selection {
    background-color: ${props => props.theme.colors.primary};
    color: #ffffff;
  }
  ::-webkit-scrollbar {
    background-color: ${props => props.theme.colors.light};
    width: 0.4rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.gradient};
  }
`;

export default GlobalStyles;
