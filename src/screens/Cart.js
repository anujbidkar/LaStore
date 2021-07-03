import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCartItems, addQuantityToCart, subtractQuantityFromCart, removeItemFromCart } from '../redux/Actions/CartAction'
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


    const handleAddQuantity = (id) => {
        dispatch(addQuantityToCart(id))
    }

    const handleSubtractQuantity = (id) => {
        dispatch(subtractQuantityFromCart(id))
    }


    return (
        <>
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {
                            cartItemsList.map((item, index) => (
                                <li className="collection-item avatar" key={item.id}>
                                    <div className="item-img">
                                        <img src={item.image} alt={item.image} className="" />
                                    </div>

                                    <div className="item-desc">
                                        <span className="title">{item.name}</span>
                                        <p>{item.desc}</p>
                                        <p><b>Price: ${item.price}</b></p>
                                        <p>
                                            <b>Quantity: {item.quantity}</b>
                                        </p>
                                        <div className="add-remove">
                                            <Link to="/cart"><i className="material-icons" onClick={() => handleAddQuantity(item.id)} >arrow_drop_up</i></Link>
                                            <Link to="/cart"><i className="material-icons" onClick={() => handleSubtractQuantity(item.id)} >arrow arrow_drop_down</i></Link>
                                        </div>
                                        <button className="waves-effect waves-light btn pink remove" onClick={() => handleRemoveItem(item.id)} >Remove</button>
                                    </div>

                                </li>
                            ))
                        }

                    </ul>
                </div>
                {/* <Recipe />           */}
            </div>
            <div>
                <CartTotal total={total} />
            </div >
        </>
    )
}

export default Cart
