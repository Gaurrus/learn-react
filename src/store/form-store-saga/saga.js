import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { postFormRequest, postFormError, postFormSeccess } from '.';

function* postFormWorker(values) {
  try {
    yield call(axios.post, ['https://httpbin.org/post', values]);
    yield put(postFormSeccess());
  } catch {
    yield put(postFormError());
  }
}

export function* postFormSaga() {
  yield takeLatest(postFormRequest.type, postFormWorker);
}
