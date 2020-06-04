import { allUserActions } from "./action-types";
import { addItemToCart, decreaseItemToCart } from "./action-utils";

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
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case allUserActions.DECREASE_ITEM:
      return {
        ...state,
        cartItems: decreaseItemToCart(state.cartItems, action.payload),
      };
    case allUserActions.DELETE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
