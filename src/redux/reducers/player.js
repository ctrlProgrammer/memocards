import { SET_PLAYER, GET_PLAYER } from "./../../constants/actionTypes.js";
const defautlState = "sebastian";

function reducer(state = defautlState, { type, payload }) {
  switch (type) {
    case SET_PLAYER:
      state = payload;
      return state;
    case GET_PLAYER:
      return state;
    default:
      return state;
  }
}

export default reducer;
