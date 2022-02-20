import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import marketReducer from './market-state';
import productReducer from './product-state';
import { rootSaga } from './root-saga';
import storageReducer from './storage-store';
import storageSagaReducer from './storage-store-saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    marketReducer,
    productReducer,
    storageReducer,
    storageSagaReducer,
  },
  middleware: (defaultMiddleware) => defaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
