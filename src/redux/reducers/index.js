import { ADD_PLAYER, SET_PLAYER } from "./../../constants/actionTypes.js";

const initialState = {
  players: [],
  player: "Sebastian"
};

export default function reducer(state = initialState, action) {
  if (action.type === ADD_PLAYER) {
    state.players.push(action.payload);
  } else if (action.type === SET_PLAYER) {
    state.player = action.payload;
  }
  console.log(state);
  return state;
}
