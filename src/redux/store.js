import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import allReducers from "./redux-reducers";

const middlewares = [logger];

export const store = createStore(allReducers, applyMiddleware(middlewares[0]));
export const persistor = persistStore(store);
