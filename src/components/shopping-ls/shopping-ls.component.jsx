import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addItemToCart } from "../../redux/cart-dropdown/cart-dropdown.actions";
import "./shopping-ls.style.scss";

const Shopping = ({ shoplist }) => {
  const { ingredients } = shoplist;
  const dispatch = useDispatch();

  return (
    <div className="shopping-ls">
      <span>My shopping list</span>
      <div className="main-ls">
        {ingredients
          ? ingredients.map(({ text }) => (
              <div className="element" key={uuidv4()}>
                {text}
              </div>
            ))
          : null}
      </div>
      <button onClick={() => dispatch(addItemToCart(shoplist))}>
        add to MY RECIPES
      </button>
    </div>
  );
};

export default Shopping;
