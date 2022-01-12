import React from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { setCurrentShopList } from "../../redux/shop-list/shop-list.actions";
import "./recipe.style.scss";

const Recipe = ({ recipe, setCurrentShopList }) => {
  const { image, label, ingredients } = recipe;
  console.log(ingredients);
  return (
    <div className="recipe">
      <img className="recipe-img" src={image} alt={label} />
      <div className="ingradients">
        {ingredients
          ? ingredients.map(({ text }) => (
              <div key={uuidv4()} className="ingradient">
                {text}
              </div>
            ))
          : null}
      </div>
      <div
        className="go-to"
        onClick={() => {
          setCurrentShopList(recipe);
        }}
      >
        take it to shop
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentShopList: (shoplist) => dispatch(setCurrentShopList(shoplist)),
});

export default connect(null, mapDispatchToProps)(Recipe);
