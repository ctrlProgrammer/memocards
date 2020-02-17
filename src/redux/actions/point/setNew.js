import { SET_NEW_POINT } from "./../../../constants/actionTypes";

const setNew = (player, point) => {
  const date = new Date();
  return {
    type: SET_NEW_POINT,
    payload: { player, point, date }
  };
};

export default setNew;
