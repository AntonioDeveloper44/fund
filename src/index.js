import { render } from 'react-dom';
import React, { Suspense } from 'react';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import './i18n'
import { Spin } from 'antd';

export const history = createBrowserHistory();


const app = (
  <Router history={history}>
    <Suspense fallback={<Spin />}>
      <App />
    </Suspense>

  </Router>
)

render(app, document.getElementById('root'));

serviceWorker.unregister();
