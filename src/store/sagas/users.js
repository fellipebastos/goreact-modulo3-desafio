import { call, put, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import apiGithub from '../../services/apiGithub';
import { Creators as UserActions } from '../ducks/users';

export function* userAdd(action) {
  try {
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

      yield put(UserActions.userAddSuccess(userData));
      toast.success('Usuário adicionado!');
    } else {
      toast.warn('Usuário já existe!');
    }
  } catch (error) {
    toast.error('Erro ao adicionar usuário!');
  }
}
