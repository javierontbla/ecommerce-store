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

export const decreaseItemToCart = (cartItems, cartItemToDecrease) => {
  const itemToDecrease = cartItems.find(
    (item) => item.id === cartItemToDecrease.id
  );

  if (itemToDecrease === 1) {
    return cartItems.filter((item) => item.id !== cartItemToDecrease.id);
  }

  return cartItems.map((item) =>
    item.id === cartItemToDecrease.id
      ? {
          ...item,
          quantity: item.quantity - 1,
        }
      : item
  );
};
