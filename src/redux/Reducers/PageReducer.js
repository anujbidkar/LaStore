import { GET_PAGE_CONTENT } from '../ActionType'
const initialState = {
    pageDetails: {}
}


export const PageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PAGE_CONTENT:
            return {
                ...state,
                pageDetails: action.payload
            }
        default:
            return state;
    }
}