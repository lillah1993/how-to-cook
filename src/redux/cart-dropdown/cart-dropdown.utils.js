export const addItem = (cartitems, item) => {
  const itemexistance = cartitems.find((el) => el.id === item.id);
  if (itemexistance) {
    return cartitems.map((cartitem) =>
      cartitem.id === item.id
        ? { ...cartitem, quantity: cartitem.quantity + 1 }
        : cartitem
    );
    // return [...cartitems, { ...item, quantity: item.quantity + 1 }];
  }
  return [...cartitems, { ...item, quantity: 1 }];
};
