export const addItem = (cartitems, item) => {
  const existantitem = cartitems.find((el) => el.id === item.id);
  if (existantitem) {
    console.log("enter");
    return cartitems.map((cartitem) => {
      let x;
      if (cartitem.id === existantitem.id) {
        console.log("enter");
        x = {
          ...cartitem,
          quantity: cartitem.quantity + 1,
          calories: cartitem.calories * cartitem.quantity,
        };

        console.log("x", x);
      } else {
        x = cartitem;
      }
      return x;
    });
  }

  return [...cartitems, { ...item, quantity: 1 }];
};

export const removeItem = (cartitems, item) => {
  if (item.quantity === 1) {
    return cartitems.filter((el) => el.id !== item.id);
  }
  return cartitems.map((el) =>
    el.id === item.id
      ? {
          ...item,
          quantity: item.quantity - 1,
        }
      : el
  );
};
