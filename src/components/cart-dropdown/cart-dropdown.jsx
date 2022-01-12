import React from "react";
import CartItem from "../cartitem/cartitem";
import "./cart-dropdown.style.scss";
import { useSelector } from "react-redux";

const CartDropDown = () => {
  const { cartitems } = useSelector((state) => state.cartdropdown);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartitems
          ? cartitems.map((cartitem) =>
              cartitem ? (
                <CartItem key={cartitem.id} cartitem={cartitem} />
              ) : null
            )
          : null}
      </div>
      <button>go to MY-RECIPES page </button>
    </div>
  );
};

export default CartDropDown;
