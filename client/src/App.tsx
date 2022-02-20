/* React Settings */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { ThemeProvider } from 'styled-components';
import { history } from '.';
/* Styled-component settings */
import { theme } from './styles/theme';
import GlobalStyle from './styles/global-style';
/* Components */
import Layout from './pages/layout';
import Home from './pages/home/Home';
import Login from './pages/login/Login';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Router history={history}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
