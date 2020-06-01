import { createStore } from "redux";

import allReducers from "./redux-reducers";

export const store = createStore(allReducers);

/*
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import reducers from "./redux-reducers";

const middlewares = [logger];

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;
*/
