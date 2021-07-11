import { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from "react-redux";
import { getCartItems, checkoutWithStripe } from "../redux/Actions/CartAction";
import InputField from "../components/InputField/InputField";
import { Redirect } from "react-router-dom";
import FormContainer from "../components/FormContainer/FormContainer";
import { Form, Button, Row, Col } from "react-bootstrap";

const CheckoutForm = (props) => {
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.AuthReducer);
  const { cartItemsList, total } = useSelector((state) => state.CartReducer);
  const { user_id } = useSelector((state) => state.AuthReducer);
  const [succeeded, setSucceeded] = useState(false);
  const [shippingForm, setShippingForm] = useState({
    email: userDetails.email,
    first_name: userDetails.name,
    last_name: "",
    company: "",
    address: "",
    state: "",
    city: "",
    country: "",
    zip: "",
  });

  useEffect(() => {
    setShippingForm({
      ...shippingForm,
      email: userDetails.email,
      first_name: userDetails.name,
    });
  }, [userDetails]);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const handleChange = async (event) => {
    const { value, name } = event.target;
    shippingForm[name] = value;
    setShippingForm({ ...shippingForm });
  };

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const res = await dispatch(
      checkoutWithStripe({ shippingForm, cartItem: cartItemsList, user_id })
    );
    if (res) {
      window.location.href = res.data.url;
    }
  };

  return (
    <FormContainer>
      <h1>Checkout Form</h1>

      <div className='form-group'></div>

      <h4>Customer Information</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            placeholder='email'
            required
            type='text'
            name='email'
            value={shippingForm.email}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <h4>Shipping Address</h4>
        <Form.Group controlId='email'>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            required
            placeholder='First Name'
            type='text'
            name='first_name'
            value={shippingForm.first_name}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            placeholder='Last Name'
            type='text'
            required
            name='last_name'
            value={shippingForm.last_name}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            type='text'
            name='company'
            required
            placeholder={"Company"}
            value={shippingForm.company}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='text'
            required
            name='address_2'
            placeholder={"Detail Address"}
            value={shippingForm.address_2}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Country</Form.Label>
          <Form.Control
            required
            type='text'
            name='country'
            placeholder={"Country"}
            value={shippingForm.country}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>State</Form.Label>
          <Form.Control
            required
            type='text'
            name='state'
            placeholder={"state"}
            value={shippingForm.state}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Zip Code</Form.Label>
          <Form.Control
            required
            type='number'
            name='zip'
            placeholder={"Zip"}
            value={shippingForm.zip}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Checkout
        </Button>
      </Form>
      {/* </form> */}
    </FormContainer>
  );
};

export default CheckoutForm;
