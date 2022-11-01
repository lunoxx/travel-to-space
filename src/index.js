
// Utility:
import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import App from './App';

import Footer from './components/Footer';
import './css/index.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
     <BrowserRouter>
        <App />
     </BrowserRouter>
    <Footer/>

  </React.StrictMode>
);

reportWebVitals();
