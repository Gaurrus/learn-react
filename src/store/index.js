import { configureStore } from '@reduxjs/toolkit';
import marketReducer from './market-state';
import productReducer from './product-state';

export const store = configureStore({
  reducer: {
    marketReducer,
    productReducer,
  },
});
