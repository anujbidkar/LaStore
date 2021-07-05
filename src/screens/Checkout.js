import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import './Checkout.css'
import CheckoutForm from './CheckoutForm'
const stripePromise = loadStripe('pk_test_51J9jekDoHVnUxfaGjBV4Opmh7X8jyycC6i87yramgwCnRo8bIJm3fjmjhqJrdP0fO1XUC6SVQXAGbhz1YxMHrXvd00EB68aHKl');

const Checkout = () => {
    return (<Elements stripe={stripePromise}>
        <CheckoutForm />
    </Elements>
    )
}

export default Checkout