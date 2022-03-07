// import React, { useEffect } from "react";
import "./favorite-item.scss";
import { ReactComponent as Remove } from "../../img/SVG/cross.svg";
import {
  addItemToCart,
  clearAnItem,
  removeItemFromCart,
  // updateItemcalories,
  updatTotalCalories,
} from "../../redux/cart-dropdown/cart-dropdown.actions";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Minus } from "../../img/SVG/minus.svg";
import { ReactComponent as Plus } from "../../img/SVG/plus.svg";
// import { useDispatch } from "react-redux";

const FavoriteItem = ({ item }) => {
  const { image, label, quantity, calories, id } = item || {};
  // console.log("upcalories", upcalories);
  const dispatch = useDispatch();
  const { cartitems } = useSelector((state) => state?.cartdropdown);
  console.log(cartitems);
  // const {
  //   cartdropdown: { upcalories },
  // } = useSelector((state) => state);
  // useEffect(() => {
  //   dispatch(updatTotalCalories());
  // }, [quantity, dispatch]);
  // const {
  //   cartdropdown: { updcalories },
  // } = useSelector((state) => state);
  // const updateCalories = (calories) => {
  //   if (calories === 0) return "unknown";
  //   else {
  //     const upcalories = (calories * quantity).toFixed(2);
  //     dispatch(updateItemcalories(id, upcalories));
  //     return upcalories;
  //   }
  // };
  return (
    <div className="favorititem">
      <div className="img-box">
        <img src={image} alt={label} />
      </div>
      <div className="fav-info">{label}</div>
      <div className="quantity">
        <Minus
          className="minus"
          onClick={() => {
            dispatch(removeItemFromCart(item));
            dispatch(updatTotalCalories());
          }}
        />
        <span>{quantity}</span>
        <Plus
          className="plus"
          onClick={() => {
            dispatch(addItemToCart(item));
            dispatch(updatTotalCalories());
          }}
        />
      </div>
      {calories ? (
        <div className="calories">{(calories * quantity).toFixed(2)}</div>
      ) : (
        <div className="calories">unknown</div>
      )}
      <Remove
        className="remove"
        onClick={() => {
          dispatch(clearAnItem(id));
          dispatch(updatTotalCalories());
        }}
      />
    </div>
  );
};

export default FavoriteItem;
