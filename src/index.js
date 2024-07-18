import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import { LanguageProvider } from './context/languageContext';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);

