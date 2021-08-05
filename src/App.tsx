// eslint-disable-next-line @typescript-eslint/no-use-before-define
import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Themes } from '@dtdot/lego';
import { NotificationProvider } from '@dtdot/notifications';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';

import apolloInstance from './singletons/apollo.instance';
import Frame from './core/Frame.component';
import AppSwitch from './core/AppSwitch.component';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${(Themes.dark as any).colours.background};

    * {
      box-sizing: border-box;
    }
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ApolloProvider client={apolloInstance}>
        <ThemeProvider theme={Themes.dark}>
          <NotificationProvider>
            <Router>
              <Frame />
              <AppSwitch />
            </Router>
          </NotificationProvider>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
