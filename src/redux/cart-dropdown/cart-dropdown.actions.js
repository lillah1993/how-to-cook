export const toggleCart = () => ({
  type: "TOGGLE_CART",
});

export const addItemToCart = (item) => ({
  type: "ADD_ITEM_TO_CART",
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: "REMOVE_ITEM_FROM_CART",
  payload: item,
});

export const clearAnItem = (id) => ({
  type: "CLEAR_ITEM",
  payload: id,
});

export const updateItemcalories = (id, upcalories) => ({
  type: "UPDATE_ITEM_CALORIES",
  payload: { id, upcalories },
});

export const updatTotalCalories = () => ({
  type: "UPDATE_TOTAL_CALORIES",
});
