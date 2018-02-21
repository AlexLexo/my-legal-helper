import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import registerServiceWorker from './registerServiceWorker';

import UIStore from './stores/ui-store';
import SessionStore from './stores/session-store';
import Routes from './components/routes/routes';

import './index.css';

ReactDOM.render(
  <Provider UIStore={UIStore} SessionStore={SessionStore}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
