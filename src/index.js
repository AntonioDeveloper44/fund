import { render } from 'react-dom';
import React from 'react';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';


const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

render(app, document.getElementById('root'));

serviceWorker.unregister();
