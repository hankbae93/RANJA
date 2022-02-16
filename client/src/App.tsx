/* React Settings */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/* Styled-component settings */
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyle from './styles/global-style';
/* Components */
import Layout from './pages/layout';
import Home from './pages/home/Home';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
