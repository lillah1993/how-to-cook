import { combineReducers } from "redux";

import listReducer from "./list/list.reducer";
import recipeReducer from "./recipe/recipe.reducer";
import shopListReducer from "./shop-list/shop-list.reducer";
import searchReducer from "./search/search.reducer";
 
export default combineReducers({
    list: listReducer,
    recipe: recipeReducer,
    shoplist: shopListReducer,
    search: searchReducer
});