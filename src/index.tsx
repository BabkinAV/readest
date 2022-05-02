import React from 'react';
import ReactDOM from 'react-dom/client';
import './fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import App from './App';
import './index.css';
// import './fonts/NewBaskerville/NewBaskerville.ttf'
// library.add(faCoffee);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
