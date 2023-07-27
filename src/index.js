import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'mobx-react';
import codeStore from './store/codeStore';
import App from './App';

const theme = createMuiTheme();

ReactDOM.render(
  <React.StrictMode>
    <Provider codeStore={codeStore}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
