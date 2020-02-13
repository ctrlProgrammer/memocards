import { SET_PLAYER } from "./../../constants/actionTypes.js";

export function setPlayer(payload) {
  return { type: SET_PLAYER, payload };
}
