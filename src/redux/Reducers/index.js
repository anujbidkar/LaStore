


import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducer"
import { CartReducer } from "./CartReducer"
import { ProductReducer } from "./ProductReducer"
const appReducer = combineReducers({
    AuthReducer,
    CartReducer,
    ProductReducer
});


export default appReducer

