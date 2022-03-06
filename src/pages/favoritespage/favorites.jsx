// import React, { useEffect } from "react";
import "./favorites.scss";
import { useSelector } from "react-redux";
import FavoriteItem from "../../components/favorite-item/favorite-item";

const Favoritespage = () => {
  const {
    cartdropdown: { cartitems, totalcalories },
  } = useSelector((state) => state);
  // useEffect(() => {
  //   const calcTotalcal = () => {
  //     return cartitems.reduce(
  //       (acc, cartitem) => acc + cartitem.calories * cartitem.quantity,
  //       0
  //     );
  //   };
  //   calcTotalcal();
  // }, [cartitems]);

  return (
    <div className="favoritespage">
      <div className="table">
        <div className="tablehead">
          <div className="header-type">
            <span>Recipe</span>
          </div>
          <div className="header-type">
            <span>Discription</span>
          </div>
          <div className="header-type">
            <span>Quantity</span>
          </div>
          <div className="header-type">
            <span>calories</span>
          </div>
          <div className="header-type">
            <span>remove</span>
          </div>
        </div>
        <div>
          {cartitems &&
            cartitems.map((item) => <FavoriteItem key={item.id} item={item} />)}
        </div>
        <div className="total">
          <span>total calories:{totalcalories?.toFixed(2)}$</span>
        </div>
      </div>
    </div>
  );
};

export default Favoritespage;
