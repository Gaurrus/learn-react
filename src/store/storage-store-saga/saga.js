import axios from 'axios';
import takeLatest, { call, put } from 'redux-saga/effects';

function* getStorageWorker() {
  try {
    const { data } = yield call(axios.get, './storage.json');
    yield put(getStorageSeccess(data));
  } catch { }
}

export function* getStorageSaga() {
  yield takeLatest(getStorageRequest.type, getStorageWorker);
}
