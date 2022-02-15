import { configureStore } from '@reduxjs/toolkit';
import marketReducer from './market-state';
import productReducer from './product-state';
import storageReducer from './storage-store';

export const store = configureStore({
  reducer: {
    marketReducer,
    productReducer,
    storageReducer,
  },
});
