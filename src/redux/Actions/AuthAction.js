import axios from 'axios'
const url = 'http://localhost:3001'
import { USER_REGISTER, SIGNIN } from '../ActionType'

export const signUpAction = (data) => async (dispatch) => {
    try {
        const res = await axios({
            method: 'POST',
            url: `${url}/api/users/register`,
            data
        })
        if (res) {
            dispatch({ type: USER_REGISTER, payload: true })
        }
        return res;
    } catch (error) {
        console.log(error)
    }
}


export const signInAction = (data) => async (dispatch) => {
    try {
        const res = await axios({
            method: 'POST',
            url: `${url}/api/users/login`,
            data
        })
        if (res) {
            localStorage.setItem('user', JSON.stringify(res.data.user))
            localStorage.setItem('token', res.data.token)
        }
        dispatch({ type: SIGNIN, payload: true })
        return res;
    } catch (error) {
        console.log(error)
    }
}