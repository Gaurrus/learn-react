/* eslint-disable no-debugger */
import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { postFormRequest, postFormError, postFormSuccess } from '.';

function* postFormWorker({ payload }) {
  console.log(payload);
  try {
    yield call(axios.post, 'https://httpbin.org/post', payload);
    yield put(postFormSuccess());
  } catch {
    yield put(postFormError());
  }
}

export function* postFormSaga() {
  yield takeLatest(postFormRequest.type, postFormWorker);
}
