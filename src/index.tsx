import React from 'react';
import ReactDOM from 'react-dom/client';
import './fontawesome';
import { ThemeProvider } from 'styled-components';
import theme from './components/AppTheme';

import App from './App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
