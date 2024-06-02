import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';

import App from './contents/App.jsx';
import configureReduxStore from './stores/configureStore.js';
import globalReduxStore from './stores/globalReduxStore.js';
import {initStoreSubscriber} from './stores/storeSubscriber.js';

const rootEl = document.getElementById('root');

const init = async () => {
  const store = configureReduxStore();

  // Enable access redux store outside components or action creators.
  globalReduxStore.setStore(store);

  // Enable redux state change listener outside the component.
  initStoreSubscriber(store);

  ReactDOM.createRoot(rootEl).render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
  );
};
init();
