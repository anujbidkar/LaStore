import { PRODUCT_DETAIL } from '../ActionType'
const productData = [
    {
        id: 1,
        name: 'dress',
        quantity: 4,
        rating: 5.5,
        price: 40,
        status: 'stock',
        description: ' testing description',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBGa26jC9nsM1BedC5prhConqR89sZHjqSng&usqp=CAU'
    },
    {
        id: 2,
        name: 'pent',
        quantity: 2,
        rating: 5,
        price: 20,
        status: 'stock',
        description: ' testing description',
        image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
    },
    {
        id: 3,
        name: 't-shirt',
        quantity: 4,
        rating: 5.5,
        price: 60,
        status: 'stock',
        description: ' testing description',
        image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
    },

];


const getProductData = () => async (dispatch) => {

}

export const getProductDetailsById = (id) => async (dispatch) => {
    const item = productData.find((item, index) => item.id === +id)
    dispatch({ type: PRODUCT_DETAIL, payload: item })
}