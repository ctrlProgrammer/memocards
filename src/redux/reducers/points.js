import { SET_NEW_POINT } from "./../../constants/actionTypes.js";

const defautlState = [];

function reducer(state = defautlState, { type, payload }) {
  switch (type) {
    case SET_NEW_POINT:
      return state;
    default:
      return state;
  }
}

export default reducer;
