import { GET_ORDER_LIST } from '../ActionType'
const initialState = {
    orderListItems: []
}


export const OrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDER_LIST:
            return {
                ...state,
                orderListItems: action.payload
            }
        default:
            return state;
    }
}