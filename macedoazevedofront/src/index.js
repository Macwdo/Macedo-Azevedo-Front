import './index.css';
import App from './App';
import Login from './Login'
import ReactDOM from 'react-dom'
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Login/>
  </React.StrictMode>
);

