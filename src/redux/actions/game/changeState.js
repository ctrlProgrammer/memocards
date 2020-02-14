import { CHANGE_STATE } from "./../../../constants/actionTypes.js";

const changeState = payload => {
  return {
    type: CHANGE_STATE,
    payload
  };
};

export default changeState;
