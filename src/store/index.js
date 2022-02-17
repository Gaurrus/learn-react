import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import marketReducer from './market-state';
import productReducer from './product-state';
import { rootSaga } from './root-saga';
import storageReducer from './storage-store';

export const store = configureStore({
  reducer: {
    marketReducer,
    productReducer,
    storageReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().cancat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
