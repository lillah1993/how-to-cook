import { addItem } from "./cart-dropdown.utils";

const INITIAL_STATE = {
  hidden: true,
  cartitems: [],
};

const CartDropDownReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_CART":
      return {
        ...state,
        hidden: !state.hidden,
      };
    case "ADD_ITEM_TO_CART":
      return {
        ...state,
        cartitems: addItem(state.cartitems, action.payload),
      };
    default:
      return state;
  }
};

export default CartDropDownReducer;
