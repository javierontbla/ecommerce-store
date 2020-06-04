import { createSelector } from "reselect";

const selectCart = (state) => state.cart;
const selectUser = (state) => state.user;
// user selectors
export const selectActiveUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

// cart selectors
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((acumm, element) => acumm + element.quantity, 0)
);

export const selectTotalPrice = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (acumm, element) => acumm + element.quantity * element.price,
    0
  )
);
