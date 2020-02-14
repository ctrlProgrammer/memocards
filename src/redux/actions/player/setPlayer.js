import { SET_PLAYER } from "./../../../constants/actionTypes.js";

const setPlayer = payload => {
  return {
    type: SET_PLAYER,
    payload
  };
};

export default setPlayer;
