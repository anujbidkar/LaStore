import { CART_ITEMS, ADD_QUANTITY, SUBTRACT_QUANTITY, REMOVE_ITEM_FROM_CART } from '../ActionType'
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
        case ADD_QUANTITY:
            const addedItem = state.cartItemsList.find((item => item._id === action.id))
            addedItem.quantity += 1
            let newTotal = state.total + addedItem.quantity * addedItem.price
            localStorage.setItem('cartItems', JSON.stringify(state.cartItemsList))
            return {
                ...state,
                total: newTotal
            }
        case SUBTRACT_QUANTITY:
            const subItem = state.cartItemsList.find((item => item._id === action.id))
            subItem.quantity -= 1
            localStorage.setItem('cartItems', JSON.stringify(state.cartItemsList))
            let newTotal2 = state.total - subItem.quantity * subItem.price
            return {
                ...state,
                total: newTotal2

            }
        case REMOVE_ITEM_FROM_CART:
            const removeItem = state.cartItemsList.filter((item) => item._id !== action.id)
            localStorage.setItem('cartItems', JSON.stringify(removeItem))
            const getNewCartItem = JSON.parse(localStorage.getItem('cartItems'))
            let newTotal3 = state.total - removeItem.quantity * removeItem.price
            return {
                ...state,
                cartItemsList: getNewCartItem,
                total: newTotal3

            }
        default:
            return state;

    }
}