import { SET_CARDS } from "./../../../constants/actionTypes";

const setCards = payload => {
  return {
    type: SET_CARDS,
    payload
  };
};

export default setCards;
