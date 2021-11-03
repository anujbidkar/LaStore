import { useEffect, useState } from "react";
import InputField from "../components/InputField/InputField";
import GoogleLogin from "./GoogleLogin";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { signInAction } from "../redux/Actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer/FormContainer";
import Message from "../components/Message/Message";
import Loader from "../components/Loader/Loader";

function SignIn() {
  const dispatch = useDispatch();
  const { isSignIn } = useSelector((state) => state.AuthReducer);
  const history = useHistory();
  const [state, setState] = useState({
    email: "test2@gmail.com",
    password: "12345678",
  });
  useEffect(() => {
    // console.log("hello world");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    state[name] = value;
    setState({ ...state });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(signInAction(state));
    console.log(`res`, res);
    if (res) {
      history.push("/");
    }
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            name='email'
            required
            onChange={handleChange}
            value={state.email}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            name='password'
            required
            placeholder='Enter password'
            value={state.password}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Sign In
        </Button>
      </Form>
      {/* <GoogleLogin></GoogleLogin> */}
      <Row className='py-3'>
        <Col>
          New Customer? <Link to={"/signup"}>Register</Link>
        </Col>
      </Row>
    </FormContainer>
  );
}

export default SignIn;
