import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import registerServiceWorker from './registerServiceWorker';

import RootStore from './stores/root-store';
import Routes from './components/routes/routes';

import 'bootstrap/scss/bootstrap.scss';
import './index.scss';

ReactDOM.render(
  <Provider RootStore={new RootStore()}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
