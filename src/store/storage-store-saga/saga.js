import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { getStorageRequest, getStorageError, getStorageSeccess } from '.';

function* getStorageWorker() {
  try {
    const { data } = yield call(axios.get, './storage.json');
    yield put(getStorageSeccess(data));
  } catch {
    yield put(getStorageError());
  }
}

export function* getStorageSaga() {
  yield takeLatest(getStorageRequest.type, getStorageWorker);
}
