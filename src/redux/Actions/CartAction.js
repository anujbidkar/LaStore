import { CART_ITEMS, REMOVE_ITEM_FROM_CART, ADD_QUANTITY, SUBTRACT_QUANTITY } from '../ActionType'


export const addItemInCart = (item, quantity) => async (dispatch) => {
    const cartItems = getCartItemsFromLocalStorage()
    const checkItemExists = cartItems.find(data => data.id === item.id)
    console.log(checkItemExists, item)
    if (checkItemExists && Object.keys(checkItemExists).length) {
        let itemIndex = cartItems.findIndex(data => data.id === item.id)
        let changeQuantity = cartItems[itemIndex]
        changeQuantity['quantity'] += +quantity
        setCartItemsInLocalStorage(cartItems)
    } else {
        cartItems.push({ ...item, quantity: +quantity })
        setCartItemsInLocalStorage(cartItems)
    }
    dispatchCartItems(dispatch, cartItems)
}

export const dispatchCartItems = (dispatch) => {
    const data = getCartItemsFromLocalStorage()
    dispatch({ type: CART_ITEMS, payload: data })
}

export const getCartItemsFromLocalStorage = () => {
    const data = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
    return data
}

export const setCartItemsInLocalStorage = (data) => {
    return localStorage.setItem('cartItems', JSON.stringify(data))
}


export const getCartItems = () => (dispatch) => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (cartItems) {
        dispatchCartItems(dispatch, cartItems);
    } else {
        dispatchCartItems(dispatch, []);
    }
};

export const removeItemFromCart = (id) => {
    return {
        type: REMOVE_ITEM_FROM_CART,
        id
    }
}


export const addQuantityToCart = (id) => {
    return {
        type: ADD_QUANTITY,
        id
    }
}

export const subtractQuantityFromCart = (id) => {
    return {
        type: SUBTRACT_QUANTITY,
        id
    }
}