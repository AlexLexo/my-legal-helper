import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import registerServiceWorker from './registerServiceWorker';

import UIStore from './stores/ui-store';
import SessionStore from './stores/session-store';
import C2Store from './stores/c2-store';
import C1Store from './stores/c1-store';
import Routes from './components/routes/routes';

import './index.css';

ReactDOM.render(
  <Provider
    UIStore={UIStore}
    SessionStore={SessionStore}
    C1Store={C1Store}
    C2Store={C2Store}
  >
    <Routes />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
