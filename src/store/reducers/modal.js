const INITIAL_STATE = {
  visible: false,
  cordinates: null,
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'modal/SHOW':
      return {
        visible: true,
        cordinates: action.payload.cordinates,
      };

    case 'modal/HIDE':
      return {
        visible: false,
        cordinates: null,
      };

    default:
      return state;
  }
}
