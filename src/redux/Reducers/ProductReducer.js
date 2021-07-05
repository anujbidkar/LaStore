import { PRODUCT_DETAIL, GET_PRODUCT_LIST } from '../ActionType'
const initialState = {
    productList: [],
    productDetails: {}
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
        default:
            return state;

    }
}