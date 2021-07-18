import axios from 'axios'
import { GET_PAGE_CONTENT } from '../ActionType'
import { url } from '../../config'


export const getPageBySlug = (slug_id) => async (dispatch) => {
    try {
        const res = await axios({
            method: 'GET',
            url: `${url}/api/page/${slug_id}`
        })
        dispatch({ type: GET_PAGE_CONTENT, payload: res.data.data })

    } catch (err) {

    }
}