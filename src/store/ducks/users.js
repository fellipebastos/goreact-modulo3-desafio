import { toast } from 'react-toastify';

/**
 * Types
 */
export const Types = {
  ADD_REQUEST: 'user/ADD_REQUEST',
  ADD_SUCCESS: 'user/ADD_SUCCESS',
  REMOVE: 'user/REMOVE',
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  data: [],
};

export default function users(state = INITIAL_STATE, action) {
  let result;

  switch (action.type) {
    case Types.ADD_SUCCESS:
      return {
        data: [...state.data, action.payload.data],
      };

    case Types.REMOVE:
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

/**
 * Actions
 */
export const Creators = {
  userAddRequest: (userInput, cordinates) => ({
    type: Types.ADD_REQUEST,
    payload: { userInput, cordinates },
  }),

  userAddSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  userRemove: user => ({
    type: Types.REMOVE,
    payload: { user },
  }),
};
