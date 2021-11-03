import axios from 'axios'
import { PRODUCT_DETAIL, GET_PRODUCT_LIST, SEARCH_PRODUCT, ADD_PRODUCT_RATING } from '../ActionType'
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

export const serachProduct = (name) => async (dispatch) => {
    try {
        const res = await axios({
            method: 'GET',
            url: `${url}/api/products/search?search=${name}`
        })
        dispatch({
            type: SEARCH_PRODUCT,
            payload: res.data.data
        })
    }
    catch (error) {
        console.log(`errr`, error)
    }
}



export const addRatingForProduct = (data) => async (dispatch) => {
    try {
        const res = await axios({
            method: 'POST',
            url: `${url}/api/products/rating`,
            data
        })
        dispatch({
            type: ADD_PRODUCT_RATING,
            payload: res.data.data
        })
    }
    catch (error) {
        console.log(`errr`, error)
    }
}
