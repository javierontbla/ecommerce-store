import { combineReducers } from "redux";

import userReducer from "./user-reducer";
import cartReducer from "./cart-reducer";

const allReducers = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default allReducers;
