import { allUserActions } from "./action-types";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case allUserActions.CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case allUserActions.ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer;
