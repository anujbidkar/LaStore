import { CART_ITEMS } from '../ActionType'
const initialState = {
    cartItemsList: [],
    total: 0
}

export const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_ITEMS:
            return {
                ...state,
                cartItemsList: action.payload,
                total: action.payload.reduce((a, b) => a + (b.price * b.quantity), 0)
            }
        default:
            return state;

    }
}