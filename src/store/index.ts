import { configureStore } from '@reduxjs/toolkit';
import apiMiddleware from './middleware';
import dataReducer from './reducer';

const store = configureStore({
  reducer: dataReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddleware),
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;

export type RootState = ReturnType<typeof store.getState>;