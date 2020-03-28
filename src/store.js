import { createStore, combineReducers } from "redux";

import reducers from "./redux/_reducers";

const store = createStore(combineReducers(reducers));

export default store;
