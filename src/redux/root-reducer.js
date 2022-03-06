import { combineReducers } from "redux";
// import { persistReducer } from "redux-persist";
// import sessionStorage from "redux-persist/lib/storage/session";

import listReducer from "./list/list.reducer";
import recipeReducer from "./recipe/recipe.reducer";
import shopListReducer from "./shop-list/shop-list.reducer";
import searchReducer from "./search/search.reducer";
import CartDropDownReducer from "./cart-dropdown/cart-dropdown.reducer";

// const persistConfig = {
//   key: "root",
//   storage: sessionStorage,
//   whitelist: ["cartdropdown"],
// };

const rootReducer = combineReducers({
  list: listReducer,
  recipe: recipeReducer,
  shoplist: shopListReducer,
  search: searchReducer,
  cartdropdown: CartDropDownReducer,
});

// export default persistReducer(persistConfig, rootReducer);
export default rootReducer;
