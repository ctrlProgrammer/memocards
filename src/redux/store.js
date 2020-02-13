import { createStore } from "redux";
import Reducer from "./reducers/index.js";

/**
 * Crea el store basado en los reducers
 */
const store = createStore(Reducer);

export default store;
