import React from "react";
import "./cartitem.scss";

const CartItem = ({ cartitem }) => {
  const { image, label } = cartitem;
  return (
    <div className="cartitem">
      <div className="img-container">
        <img src={image} alt={label} />
      </div>
      <div className="info">{label}</div>
    </div>
  );
};

export default CartItem;
