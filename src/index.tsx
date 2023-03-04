import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import musicReducer from './state/musicState';
import musicSaga from './state/musicSaga';

const saga = createSagaMiddleware()
const store = configureStore({
  reducer: {
    music: musicReducer
  },
  middleware: [saga]
});

saga.run(musicSaga);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

