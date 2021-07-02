import { PRODUCT_DETAIL } from '../ActionType'
const initialState = {
    productDetails: {}
}

export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_DETAIL:
            return {
                ...state,
                productDetails: action.payload
            }
        default:
            return state;

    }
}