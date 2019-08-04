const INITIAL_STATE = {
  data: [],
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'user/ADD_SUCCESS':
      return {
        data: [...state.data, action.payload.data],
      };

    case 'user/REMOVE':
      return { ...state, data: state.data.filter(user => user.id !== action.payload.user.id) };

    default:
      return state;
  }
}
