import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import InputField from "../components/InputField/InputField";
import { signUpAction } from "../redux/Actions/AuthAction";
import { Link } from "react-router-dom";

// import { Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer/FormContainer";
import Message from "../components/Message/Message";
import Loader from "../components/Loader/Loader";
import { Form, Button, Row, Col } from "react-bootstrap";

function SignUp(props) {
  console.log(`propsss`, props);
  const dispatch = useDispatch();
  const history = useHistory();
  const { isSignup } = useSelector((state) => state.AuthReducer);
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [err, setError] = useState({});
  useEffect(() => {}, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    state[name] = value;
    setState({ ...state });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(signUpAction(state));
    if (res) {
      history.push("/signin");
    }
  };

  const validateForm = () => {
    let flag = false;
    if (state.name === "") {
      err["name"] = "name cannot empty";
    }
  };

  return (
    <div className='signup-form'>
      <FormContainer>
        <h1>Sign Up</h1>

        <Form onSubmit={handleChange}>
          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='text'
              name='email'
              placeholder=''
              handleChange={handleChange}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' name='password'></Form.Control>
          </Form.Group>

          <Form.Group controlId='confirmPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type='password' name='password'></Form.Control>
          </Form.Group>

          <Button type='submit' variant='primary'>
            Register
          </Button>
        </Form>

        <Row className='py-3'>
          <Col>
            Have an Account? <Link to={"/signin"}>Login</Link>
          </Col>
        </Row>
      </FormContainer>
    </div>
  );
}

export default SignUp;
