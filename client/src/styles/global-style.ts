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
  }
`;

export default GlobalStyle;
