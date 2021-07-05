import { useEffect, useState } from "react";
import {
    CardElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import { useSelector } from 'react-redux'
import { getCartItems } from '../redux/Actions/CartAction'


const CheckoutForm = (props) => {
    const { cartItemsList, total } = useSelector(state => state.CartReducer)
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    useEffect(() => {
        const fetchCartItems = () => {
            getCartItems()
        }
        fetchCartItems()
    }, [])
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        window
            .fetch("http://localhost:3001/api/orders/create-payment-intent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ total })
            })
            .then(res => {
                return res.json();
            })
            .then(data => {
                setClientSecret(data.clientSecret);
            });
    }, []);


    const handleChange = async (event) => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
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
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        });
        if (payload.error) {
            setError(`Payment failed ${payload.error.message}`);
            setProcessing(false);
        } else {
            setError(null);
            setProcessing(false);
            setSucceeded(true);
        }
    };

    const handleCreatePayment = () => {

    }

    return (
        <form id="payment-form" onSubmit={handleSubmit}>
            <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
            <button
                disabled={processing || disabled || succeeded}
                id="submit"
            >
                <span id="button-text">
                    {processing ? (
                        <div className="spinner" id="spinner"></div>
                    ) : (
                        "Pay now"
                    )}
                </span>
            </button>
            {/* Show any error that happens when processing the payment */}
            {error && (
                <div className="card-error" role="alert">
                    {error}
                </div>
            )}
            {/* Show a success message upon completion */}
        </form>
    );
}

export default CheckoutForm