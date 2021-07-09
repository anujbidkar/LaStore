import axios from 'axios'
import { PRODUCT_DETAIL, GET_PRODUCT_LIST } from '../ActionType'
import { url } from '../../config'


//  get all products

export const getProductData = () => async (dispatch) => {
    try {
        const res = await axios({
            method: 'GET',
            url: `${url}/api/products/get`
        })
        dispatch({ type: GET_PRODUCT_LIST, payload: res.data.data })
    }
    catch (error) {
    }
}

export const getProductDetailsById = (id) => async (dispatch) => {
    try {
        const res = await axios({
            method: 'GET',
            url: `${url}/api/products/detail/${id}`
        })
        dispatch({
            type: PRODUCT_DETAIL,
            payload: res.data.data
        })
    }
    catch (error) {
        console.log(`errr`, error)
    }
}