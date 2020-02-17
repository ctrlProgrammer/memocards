import { SET_NEW_POINT } from "./../../constants/actionTypes.js";

const defautlState = [];

function reducer(state = defautlState, { type, payload }) {
  switch (type) {
    case SET_NEW_POINT:
      state.push(payload);
      return state;
    default:
      return state;
  }
}

export default reducer;
