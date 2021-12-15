import React from "react";
import './list-element.component.scss';
import { connect } from "react-redux";
import { setCurrentRecipe } from "../redux/recipe/recipe.actions";
import { setCurrentShopList } from "../redux/shop-list/shop-list.actions";

const ListElement = ({recipe,setCurrentRecipe,setCurrentShopList}) =>{
    const {image,label} = recipe;
    return(
            <div className="element" onClick={()=>{setCurrentRecipe(recipe);
                                                  setCurrentShopList()}}>
                <div className="img-container">
                    <img src={image} alt={label} />
                </div>
                <div className="info">{label}</div>
            </div>
    )};

const mapDispatchToProps = dispatch => ({
    setCurrentRecipe: recipe => dispatch(setCurrentRecipe(recipe)),
    setCurrentShopList: () =>dispatch(setCurrentShopList())
});

export default connect(null,mapDispatchToProps)(ListElement);

