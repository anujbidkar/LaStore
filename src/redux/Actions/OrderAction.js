import axios from 'axios'
import { GET_ORDER_LIST } from '../ActionType'
import { url } from '../../config'


export const getOrderList = (user_id) => async (dispatch) => {
    try {
        const res = await axios({
            method: 'GET',
            url: `${url}/api/orders/orderList/${user_id}`
        })
        dispatch({ type: GET_ORDER_LIST, payload: res.data.data })

    } catch (err) {

    }
}