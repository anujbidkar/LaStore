import axios from "axios";
import {
    CART_ITEMS,
    REMOVE_ITEM_FROM_CART,
    ADD_QUANTITY,
    SUBTRACT_QUANTITY,
    REMOVE_ALL_ITEM_FROM_CART,
} from "../ActionType";
import { url } from "../../config";

export const addItemInCart = (item, quantity) => async (dispatch) => {
    const cartItems = getCartItemsFromLocalStorage();
    const checkItemExists = cartItems.find((data) => data._id === item._id);

    if (checkItemExists && Object.keys(checkItemExists).length) {
        let itemIndex = cartItems.findIndex((data) => data._id === item._id);
        let changeQuantity = cartItems[itemIndex];
        changeQuantity["quantity"] += +quantity;
        setCartItemsInLocalStorage(cartItems);
    } else {
        cartItems.push({ ...item, quantity: +quantity });
        setCartItemsInLocalStorage(cartItems);
    }
    dispatchCartItems(dispatch, cartItems);
};

export const dispatchCartItems = (dispatch) => {
    const data = getCartItemsFromLocalStorage();
    dispatch({ type: CART_ITEMS, payload: data });
};

export const getCartItemsFromLocalStorage = () => {
    const data = localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [];
    return data;
};

export const setCartItemsInLocalStorage = (data) => {
    return localStorage.setItem("cartItems", JSON.stringify(data));
};

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
        id,
    };
};
export const removeAllItemFromCart = () => {
    return {
        type: REMOVE_ALL_ITEM_FROM_CART,
    };
};

export const addQuantityToCart = (id) => {
    return {
        type: ADD_QUANTITY,
        id,
    };
};

export const subtractQuantityFromCart = (id) => {
    return {
        type: SUBTRACT_QUANTITY,
        id,
    };
};

export const checkoutWithStripe =
    ({ shippingForm, cartItem, user_id }) =>
        async (dispatch) => {
            try {
                const res = await axios({
                    method: "POST",
                    url: `${url}/api/orders/checkout`,
                    data: { ...shippingForm, cartItem, user_id },
                });
                localStorage.setItem("order_id", res.data.data.order_id);
                debugger
                return res.data;
            } catch (error) {
                console.log(error);
            }
        };
