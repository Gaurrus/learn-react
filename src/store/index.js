import { configureStore } from '@reduxjs/toolkit';
import storageReducer from './storage-store';

export const store = configureStore({
  reducer: {
    storageReducer,
  },
});
