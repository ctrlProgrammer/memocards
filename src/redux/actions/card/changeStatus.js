import { CHANGE_CARD_STATUS } from "./../../../constants/actionTypes";

const changeCardStatus = (status, id) => {
  return {
    type: CHANGE_CARD_STATUS,
    payload: {
      status,
      id
    }
  };
};

export default changeCardStatus;
