import { allUserActions } from "./action-types";

export const cartAction = () => ({
  type: allUserActions.CART_HIDDEN,
});

export const addItem = (item) => ({
  type: allUserActions.ADD_ITEM,
  payload: item,
});

export const decreaseItem = (item) => ({
  type: allUserActions.DECREASE_ITEM,
  payload: item,
});

export const deleteItem = (item) => ({
  type: allUserActions.DELETE_ITEM,
  payload: item,
});
