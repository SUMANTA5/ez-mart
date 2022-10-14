import { createStore } from "redux";
import rootReducer from "./rootReducer";
const state = createStore(rootReducer);

export default state;
