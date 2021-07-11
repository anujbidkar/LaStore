


import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducer"
import { CartReducer } from "./CartReducer"
import { ProductReducer } from "./ProductReducer"
import { OrderReducer } from "./OrderReducer"
const appReducer = combineReducers({
    AuthReducer,
    CartReducer,
    ProductReducer,
    OrderReducer
});


export default appReducer

