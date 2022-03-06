import { createStore } from "redux";
import todoReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools();
const store = createStore(todoReducer, composeEnhancers);

export default store;
