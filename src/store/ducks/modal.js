/**
 * Types
 */

export const Types = {
  SHOW: 'modal/SHOW',
  HIDE: 'modal/HIDE',
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  visible: false,
  cordinates: null,
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW:
      return {
        visible: true,
        cordinates: action.payload.cordinates,
      };

    case Types.HIDE:
      return {
        visible: false,
        cordinates: null,
      };

    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  modalShow: cordinates => ({
    type: Types.SHOW,
    payload: { cordinates },
  }),

  modalHide: () => ({
    type: Types.HIDE,
  }),
};
