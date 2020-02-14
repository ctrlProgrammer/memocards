import { createStore, combineReducers } from "redux";
import player from "./reducers/player.js";
import game from "./reducers/game.js";

const reducer = combineReducers({
  player,
  game
});
/**
 * Crea el store basado en los reducers
 */
const store = createStore(reducer);

export default store;
