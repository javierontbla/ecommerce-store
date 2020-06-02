import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import allReducers from "./redux-reducers";

const middlewares = [logger];

const store = createStore(allReducers, applyMiddleware(middlewares[0]));

export default store;
