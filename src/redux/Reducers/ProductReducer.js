import { PRODUCT_DETAIL, GET_PRODUCT_LIST, SEARCH_PRODUCT } from '../ActionType'
const initialState = {
    productList: [],
    productDetails: {},
    searchProductList: [],
}

export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_LIST:
            return {
                ...state,
                productList: action.payload
            }
        case PRODUCT_DETAIL:
            return {
                ...state,
                productDetails: action.payload
            }
        case SEARCH_PRODUCT:
            return {
                ...state,
                searchProductList: action.payload
            }
        default:
            return state;
    }
}