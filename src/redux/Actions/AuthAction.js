import axios from 'axios'

export const signUpAction = (data) => async (dispatch) => {
    try {
        const res = axios({
            method: 'POST',
            data
        })
    } catch (error) {
        console.log(error)
    }
}