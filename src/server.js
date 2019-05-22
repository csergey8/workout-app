import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import theme from './theme';
import JssProvider from 'react-jss/lib/JssProvider';
import { SheetsRegistry } from 'react-jss/lib/jss';
import { MuiThemeProvider, createGenerateClassName } from '@material-ui/core/styles';
import reload from 'reload';

const app = express();

const PORT = 3000;

app.use(express.static('public'));

const dev = process.env.NODE_ENV === 'development';

if(dev) {
  reload(app);
}

app.use((req, res) => {
  const sheetsRegistry = new SheetsRegistry();

  const generateClassName = createGenerateClassName();

  const sheetsManager = new Map();

  const html = renderToString(
    <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
        <App />
      </MuiThemeProvider>
    </JssProvider>
  )

  const css = sheetsRegistry.toString();

  res.send(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <style id='jss-styles'>${css}</style>
      <title>React App</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script src="main.js" async></script>
      ${ dev ? `<script src="/reload/reload.js" async></script>` : '' }
    </body>
  </html>
  `)  
})

app.listen(PORT, () => {
  console.log(`Server is runnnig on ${PORT} port`)
})