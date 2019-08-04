import { all, takeLatest } from 'redux-saga/effects';

// Types
import { Types as UserTypes } from '../ducks/users';

import { userAdd } from './users';

export default function* rootSaga() {
  yield all([takeLatest(UserTypes.ADD_REQUEST, userAdd)]);
}
