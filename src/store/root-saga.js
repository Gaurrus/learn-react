import { all } from 'redux-saga/effects';
import { postFormSaga } from './form-store-saga/saga';
import { getStorageSaga } from './storage-store-saga/saga';

export function* rootSaga() {
  yield all([getStorageSaga(), postFormSaga()]);
}
