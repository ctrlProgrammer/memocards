import { ADD_PLAYER } from "./../../constants/actionTypes.js";

export function addPlayer(payload) {
  return { type: ADD_PLAYER, payload };
}
