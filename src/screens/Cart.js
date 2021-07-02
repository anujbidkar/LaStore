import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCartItems } from '../redux/Actions/CartAction'
import './cart.css'
import CartTotal from '../components/CartTotal/CartTotal'

function Cart() {
    const dispatch = useDispatch()
    const { cartItemsList, total } = useSelector(state => state.CartReducer)

    useEffect(() => {
        fetchCartItems()
    }, [cartItemsList.length])

    const fetchCartItems = () => {
        dispatch(getCartItems())
    }

    const handleRemoveItem = (id) => {
         dispatch(removeItemFromCart(id))
    }

    return (
        <div>
            your cart
            <div className="cart-items">
                <div>image</div>
                <div>item  </div>
                <div> price </div>
                <div> quantity </div>
            </div>

            {
                cartItemsList.map((item, index) => (
                    <div className='cart-items-list' key={index}>
                        <div><img className='cart-image' src={item.image} /></div>
                        <div> {item.name}  </div>
                        <div>  {item.price}  </div>
                        <div> {item.quantity}</div>
                        <button onClick={() => handleRemoveItem(item.id)}>remove item</button>
                    </div>
                ))
            }

            <CartTotal total={total} />
        </div >
    )
}

export default Cart
