import { SET_INMUTABLE_CARD } from "./../../../constants/actionTypes";

const changeCardStatus = id => {
  return {
    type: SET_INMUTABLE_CARD,
    payload: {
      id
    }
  };
};

export default changeCardStatus;
