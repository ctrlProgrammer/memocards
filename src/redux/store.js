import { createStore, combineReducers } from "redux";
import player from "./reducers/player.js";

const reducer = combineReducers({
  player
});
/**
 * Crea el store basado en los reducers
 */
const store = createStore(reducer);

export default store;
