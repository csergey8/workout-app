import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { deepOrange, amber } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: deepOrange,
    secondary: {
      main: amber[200],
      light: amber.A300,
      dark: amber[800]
    },
    type: 'dark'
  },
  spacing: {
    unit: 10
  }
});

import(/* webpackChunkName: 'app' */'./App')
  .then(({ default: App }) => 
    render(
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
    , document.getElementById('root')))


