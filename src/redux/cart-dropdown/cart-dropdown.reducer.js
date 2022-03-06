import { addItem, removeItem } from "./cart-dropdown.utils";

const INITIAL_STATE = {
  hidden: true,
  cartitems: [],
  totalcalories: 0,
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
    case "REMOVE_ITEM_FROM_CART":
      return {
        ...state,
        cartitems: removeItem(state.cartitems, action.payload),
      };
    case "CLEAR_ITEM":
      return {
        ...state,
        cartitems: state.cartitems.filter((el) => el.id !== action.payload),
      };
    case "UPDATE_ITEM_CALORIES":
      return {
        ...state,
        cartitems: state.cartitems.map((el) => {
          return el.id === action.payload.id
            ? { ...el, updcalories: action.payload.upcalories }
            : el;
        }),
      };
    case "UPDATE_TOTAL_CALORIES":
      return {
        ...state,
        totalcalories: state.cartitems.reduce(
          (acc, cartitem) => acc + cartitem.calories * cartitem.quantity,
          0
        ),
      };

    default:
      return state;
  }
};

export default CartDropDownReducer;
