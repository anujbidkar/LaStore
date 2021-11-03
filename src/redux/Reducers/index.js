


import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducer"
import { CartReducer } from "./CartReducer"
import { ProductReducer } from "./ProductReducer"
import { OrderReducer } from "./OrderReducer"
import { PageReducer } from './PageReducer'
const appReducer = combineReducers({
    AuthReducer,
    CartReducer,
    ProductReducer,
    OrderReducer,
    PageReducer
});


export default appReducer

