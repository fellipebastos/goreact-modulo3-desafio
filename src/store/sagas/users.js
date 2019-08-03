import { call, put } from 'redux-saga/effects';
import apiGithub from '../../services/apiGithub';

import { userAddSuccess } from '../actions/users';

export function* userAdd(action) {
  const { data } = yield call(apiGithub.get, `/users/${action.payload.userInput}`);

  const userData = {
    id: data.id,
    avatar: data.avatar_url,
    name: data.name,
    login: data.login,
    cordinates: action.payload.cordinates,
  };

  yield put(userAddSuccess(userData));
}
