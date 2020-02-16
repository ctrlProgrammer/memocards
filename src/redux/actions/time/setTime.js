import { SET_TIME } from "../../../constants/actionTypes";

const setTime = time => {
  return {
    type: SET_TIME,
    payload: time
  };
};

export default setTime;
