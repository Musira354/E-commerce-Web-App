import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productReducer from "./productReducer";
import handleCart from "./handleCart";


export default combineReducers({
  authenticationData: authReducer,
  productsData: productReducer,
  handleCart,
});
