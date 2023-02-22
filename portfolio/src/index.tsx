import reportWebVitals from './reportWebVitals';
import  Router from './Routes/index';
import ReactDOM from 'react-dom';
import React from 'react';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Router />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
