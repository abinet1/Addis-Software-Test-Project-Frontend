import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';


import musicReducer from './musicState';

export const saga = createSagaMiddleware()
export const store = configureStore({
  reducer: {
    music: musicReducer
  },
  middleware: [saga]
});


export type RootState = ReturnType<typeof store.getState>