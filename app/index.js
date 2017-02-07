import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import Root from './containers/Root';

require('./styles/style.scss');

// const store = configureStore();
const history = syncHistoryWithStore(browserHistory, configureStore);

render(
  <AppContainer>
    <Root store={configureStore} history={history} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NewRoot = require('./containers/Root').default;
    render(
      <AppContainer>
        <NewRoot store={configureStore} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
