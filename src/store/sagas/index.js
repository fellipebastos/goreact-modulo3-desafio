import { all, takeLatest } from 'redux-saga/effects';

import { userAdd } from './users';

export default function* rootSaga() {
  yield all([takeLatest('user/ADD_REQUEST', userAdd)]);
}
