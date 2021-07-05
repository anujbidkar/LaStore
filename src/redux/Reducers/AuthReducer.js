import { USER_REGISTER, SIGNIN } from '../ActionType'
const initialState = {
    isSignup: false,
    isSignIn: false
}

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_REGISTER:
            return {
                ...state,
                isSignup: action.payload

            }
        case SIGNIN:
            return {
                ...state,
                isSignIn: action.payload
            }
        default:
            return state;

    }
}