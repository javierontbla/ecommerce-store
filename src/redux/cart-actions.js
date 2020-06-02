import { allUserActions } from "./action-types";

export const cartAction = () => ({
  type: allUserActions.CART_HIDDEN,
});

export const addItem = (item) => ({
  type: allUserActions.ADD_ITEM,
  payload: item,
});
