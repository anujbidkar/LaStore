import { useEffect, useState } from "react";
import {
    CardElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from 'react-redux'
import { getCartItems, checkoutWithStripe } from '../redux/Actions/CartAction'
import InputField from '../components/InputField/InputField'
import { Redirect } from 'react-router-dom'


const CheckoutForm = (props) => {
    const dispatch = useDispatch()
    const { cartItemsList, total } = useSelector(state => state.CartReducer)
    const [succeeded, setSucceeded] = useState(false);
    const [shippingForm, setShippingForm] = useState({
        email: '',
        first_name: '',
        last_name: '',
        company: '',
        address: '',
        state: '',
        city: '',
        country: '',
        zip: ''

    });
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();



    const handleChange = async (event) => {
        const { value, name } = event.target
        shippingForm[name] = value;
        setShippingForm({ ...shippingForm })
    };


    const cardStyle = {
        style: {
            base: {
                color: "#32325d",
                fontFamily: 'Arial, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                    color: "#32325d"
                }
            },
            invalid: {
                color: "#fa755a",
                iconColor: "#fa755a"
            }
        }
    };
    const handleSubmit = async ev => {
        ev.preventDefault();
        console.log(`wfewewfewf`, cartItemsList)
        const res = await dispatch(checkoutWithStripe({ shippingForm, cartItem: cartItemsList }))
        if (res) {
            window.location.href = res.data
        }

    };



    return (
        <form id="payment-form" onSubmit={handleSubmit}>
            <h4>Customer Information</h4>
            <InputField
                placeholder='email'
                require={false}
                type='text'
                name='email'
                value={shippingForm.email}
                handleChange={handleChange}
            />
            <h4>Shipping Address</h4>
            <InputField
                require={false}
                placeholder='First Name'
                type='text'
                name='first_name'
                value={shippingForm.first_name}
                handleChange={handleChange}
            />
            <InputField
                require={false}
                type='text'
                name='last_name'
                placeholder={'Last name'}
                value={shippingForm.last_name}
                handleChange={handleChange}
            />
            <InputField
                require={false}
                type='text'
                name='company'
                placeholder={'Company'}
                value={shippingForm.company}
                handleChange={handleChange}
            />
            <InputField
                type='text'
                require={false}
                name='address_2'
                placeholder={'Apt (Opt`ional)'}
                value={shippingForm.address_2}
                handleChange={handleChange}
            />
            <InputField
                require={false}
                type='text'
                name='country'
                placeholder={'Country'}
                value={shippingForm.country}
                handleChange={handleChange}
            />
            <InputField
                require={false}
                type='text'
                name='state'
                placeholder={'state'}
                value={shippingForm.state}
                handleChange={handleChange}
            />

            <InputField
                require={false}
                type='text'
                name='zip'
                placeholder={'Zip'}
                value={shippingForm.zip}
                handleChange={handleChange}
            />

            <button>
                checkout
            </button>

        </form>
    );
}

export default CheckoutForm