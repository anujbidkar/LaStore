import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getOrderList } from '../redux/Actions/OrderAction'

function OrderList() {
    const dispatch = useDispatch();
    const { user_id } = useSelector((state) => state.AuthReducer);
    console.log(`user_id`, user_id)
    const { orderListItems } = useSelector((state) => state.OrderReducer)
    useEffect(() => {
        if (user_id) {
            fetchOrders()
        }
    }, [user_id])

    const fetchOrders = () => {
        dispatch(getOrderList(user_id))
    }

    return (
        <div>
            {orderListItems.map((item, index) => (
                <div>
                    <div>
                        <h1>order number</h1>
                        {item.order_number}
                    </div>
                    <div>
                        <h1>order Status</h1>
                        {item.order_status}
                    </div>
                    <div>
                        <h1>payment status</h1>
                        {item.payment_status}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default OrderList
