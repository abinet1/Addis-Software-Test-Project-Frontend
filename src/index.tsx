import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from 'react-redux';
import { saga, store } from './state/reduxConf';
import musicSaga from './state/musicSaga';


saga.run(musicSaga);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={ store }>
    <App />
  </Provider>
);

