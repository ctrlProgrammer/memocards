import { createStore, combineReducers } from "redux";
import player from "./reducers/player.js";
import game from "./reducers/game.js";
import cards from "./reducers/cards.js";
import points from "./reducers/points.js";

const reducer = combineReducers({
  player,
  game,
  cards,
  points
});

/**
 * Crea el store basado en los reducers
 */
const store = createStore(reducer);

export default store;
