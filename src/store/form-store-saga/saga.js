/* eslint-disable no-debugger */
import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { postFormRequest, postFormError, postFormSuccess } from '.';

const postData = (values) =>
  axios({
    method: 'post',
    url: 'https://httpbin.org/post',
    data: {
      name: 'name',
      id: 'id',
    },
  });

function* postFormWorker() {
  try {
    yield call(postData);
    yield put(postFormSuccess());
  } catch {
    yield put(postFormError());
  }
}

export function* postFormSaga() {
  yield takeLatest(postFormRequest.type, postFormWorker);
}
