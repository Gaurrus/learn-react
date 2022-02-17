import { all } from 'redux-saga/effects';
import { getStorageSaga } from './storage-store-saga/saga';

export function* rootSaga() {
  yield all([getStorageSaga()]);
}
