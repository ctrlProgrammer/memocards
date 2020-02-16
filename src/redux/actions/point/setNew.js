import { SET_NEW_POINT } from "./../../../constants/actionTypes";

const setNew = point => {
  return {
    type: SET_NEW_POINT,
    payload: point
  };
};

export default setNew;
