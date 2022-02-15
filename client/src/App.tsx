/* React Settings */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/* Styled-component settings */
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyle from './styles/global-style';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Hi</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
