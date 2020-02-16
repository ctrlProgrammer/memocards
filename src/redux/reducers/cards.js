import {
  CHANGE_CARD_STATUS,
  SET_CARDS,
  CLOSE_ALL_CARDS,
  SET_INMUTABLE_CARD
} from "./../../constants/actionTypes.js";

const defautlState = {
  cards: []
};

function reducer(state = defautlState, { type, payload }) {
  switch (type) {
    case CHANGE_CARD_STATUS:
      if (state.cards !== undefined && state.cards.length > 0) {
        state.cards.forEach(card => {
          if (card.id === payload.id) card.active = payload.status;
        });
      }
      return state;
    case SET_CARDS:
      state.cards = payload.length > 0 && payload !== undefined ? payload : [];
      return state;
    case CLOSE_ALL_CARDS:
      state.cards.forEach(card => {
        if (card.mutable === true) card.active = false;
      });
      return state;
    case SET_INMUTABLE_CARD:
      state.cards.forEach(card => {
        console.log(card.id, payload);
        if (card.id === payload.id) card.mutable = false;
      });
      console.log("change mutable to inmutable");
      console.log(state.cards);
      return state;
    default:
      return state;
  }
}

export default reducer;
