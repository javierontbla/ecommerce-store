import { allUserActions } from "./action-types";

const INITIAL_STATE = {
  hidden: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case allUserActions.CART_HIDDEN:
      return { hidden: !state.hidden };
    default:
      return state;
  }
};

export default cartReducer;
