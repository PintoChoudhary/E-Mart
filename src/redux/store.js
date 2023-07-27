import { createStore } from "redux";
import { cartReducer } from "./reducers/cart-reducers";
import { combineReducers } from "redux";
import favoritesReducer from './reducers/fav-reducer'
const rootReducer = combineReducers({
    cart: cartReducer,
    favorites: favoritesReducer,
  });
const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store