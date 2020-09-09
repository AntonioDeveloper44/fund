import { render } from 'react-dom';
import React from 'react';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router-dom';

import {createBrowserHistory} from 'history';
export const history = createBrowserHistory();


const app = (
  <Router history={history}>
    <App />
  </Router>
)

render(app, document.getElementById('root'));

serviceWorker.unregister();
