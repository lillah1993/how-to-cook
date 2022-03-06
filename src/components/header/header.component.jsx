import React from "react";
import Search from "../search/search.component";
import "./header.style.scss";
import { ReactComponent as Logo } from "../../img/SVG/spoon-knife.svg";
import { ReactComponent as Like } from "../../img/SVG/heart.svg";
// eslint-disable-next-line no-unused-vars
import CartDropDown from "../cart-dropdown/cart-dropdown";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../redux/cart-dropdown/cart-dropdown.actions";

const Header = () => {
  const { hidden } = useSelector((state) => state.cartdropdown);
  const dispatch = useDispatch();

  return (
    <div className="header">
      <div className="main-logo">
        <div className="spoon-knife">
          <Logo className="logo" />
        </div>
        <span>HOW-TO-COOK</span>
      </div>

      <Search />
      {/* <div className="icon">
            <Like className='heart'/>
        </div> */}
      <Like className="heart" onClick={() => dispatch(toggleCart())} />
      {hidden && <CartDropDown />}
    </div>
  );
};
export default Header;
