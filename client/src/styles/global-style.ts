import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html,
  body {
    overflow: hidden;
  }

  * {
		margin: 0;
		padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Noto Sans KR', sans-serif;
    font-family: 'Roboto', sans-serif;
  }

  a {
    color: #000;
    text-decoration: none;
  }
`;

export default GlobalStyle;
