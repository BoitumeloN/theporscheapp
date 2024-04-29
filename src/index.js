import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BackgroundUpdater from './Nav';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <App /> 
    <BackgroundUpdater/>
  </React.StrictMode>,
  document.getElementById('react')
);

reportWebVitals();


