import { call, put, select } from 'redux-saga/effects';
import apiGithub from '../../services/apiGithub';

import { userAddSuccess } from '../actions/users';

export function* userAdd(action) {
  const { data } = yield call(apiGithub.get, `/users/${action.payload.userInput}`);

  const userHasExists = yield select(state => state.users.data.find(user => user.id === data.id));

  if (!userHasExists) {
    const userData = {
      id: data.id,
      avatar: data.avatar_url,
      name: data.name,
      login: data.login,
      cordinates: action.payload.cordinates,
    };

    yield put(userAddSuccess(userData));
  }
}
