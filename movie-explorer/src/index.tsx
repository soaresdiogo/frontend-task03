/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Movies } from './screens/movies';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Movies />
  </React.StrictMode>
);
