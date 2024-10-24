import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  // Optional: If you want to add any global CSS styles

import { AppContextProvider } from "./helpers/Provider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
