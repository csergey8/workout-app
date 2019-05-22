import React from 'react';
import { hydrate } from 'react-dom';
import { MuiThemeProvider, createGenerateClassName } from '@material-ui/core/styles';
import App from './App';
import theme from './theme';
import JssProvider from 'react-jss/lib/JssProvider';


const generateClassName = createGenerateClassName();

hydrate(
  <JssProvider generateClassName={generateClassName}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </JssProvider>

, document.getElementById('root'), () => {
  document.getElementById('jss-styles').remove();
})


