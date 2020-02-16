import { CHANGE_STATE } from "./../../constants/actionTypes.js";

/**
 * STATE 0 , ON INTRO PAGE
 * STATE 1 , ON GAME
 * STATE 2 , ON END PAGE
 */
const defautlState = 0;

function reducer(state = defautlState, { type, payload }) {
  switch (type) {
    case CHANGE_STATE:
      state = payload;
      return state;
    default:
      return state;
  }
}

export default reducer;
