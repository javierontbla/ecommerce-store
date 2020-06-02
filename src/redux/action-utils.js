export const addItemToCart = (cartItems, cartItemToAdd) => {
  // cartItems must be a list
  const existingCartItem = cartItems.find(
    // see if the item is the same
    (item) => item.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    // if item is duplicated
    return cartItems.map((item) =>
      item.id === cartItemToAdd.id
        ? // spread the item and add 1 to the quantity
          { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
