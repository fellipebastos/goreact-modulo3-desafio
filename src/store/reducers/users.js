import { toast } from 'react-toastify';

const INITIAL_STATE = {
  data: [],
};

export default function users(state = INITIAL_STATE, action) {
  let result;

  switch (action.type) {
    case 'user/ADD_SUCCESS':
      return {
        data: [...state.data, action.payload.data],
      };

    case 'user/REMOVE':
      result = {
        ...state,
        data: state.data.filter(user => user.id !== action.payload.user.id),
      };

      toast.info('Usuário removido!');
      return result;

    default:
      return state;
  }
}
