import { SET_TIME } from "./../../constants/actionTypes.js";

const defautlState = 0;

function reducer(state = defautlState, { type, payload }) {
  switch (type) {
    case SET_TIME:
      state = payload;
      return state;
    default:
      return state;
  }
}

export default reducer;
