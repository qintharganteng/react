import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css'; // pastikan ini ada supaya Tailwind dimuat

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
