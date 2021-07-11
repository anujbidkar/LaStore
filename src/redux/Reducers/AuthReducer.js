import { USER_REGISTER, SIGNIN, GET_USER_DETAILS, LOGOUT } from '../ActionType'
const initialState = {
    isSignup: false,
    isSignIn: false,
    userDetails: {},
    user_id: null
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
        case GET_USER_DETAILS:
            return {
                ...state,
                isSignIn: true,
                userDetails: action.payload,
                user_id: action.payload._id
            }
        case LOGOUT:
            localStorage.removeItem('user')
            localStorage.removeItem('token')
            return {
                ...state,
                isSignIn: false,
                userDetails: null,
                user_id: null
            }
        default:
            return state;

    }
}