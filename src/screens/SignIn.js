import { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import InputField from '../components/InputField/InputField'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { signInAction } from '../redux/Actions/AuthAction'
import { useDispatch, useSelector } from 'react-redux'


function SignIn() {
    const dispatch = useDispatch()
    const { isSignIn } = useSelector(state => state.AuthReducer)
    const history = useHistory()
    const [state, setState] = useState({
        email: '',
        password: '',

    })
    useEffect(() => {
        console.log("hello world")
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        state[name] = value
        setState({ ...state })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await dispatch(signInAction(state))
        console.log(`res`, res)
        if (res) {
            history.push('/')
        }

    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <InputField type='text' name='email' value={state.email} placeholder='' handleChange={handleChange} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Password</Form.Label>
                    <InputField type='password' name='password' value={state.password} placeholder='' handleChange={handleChange} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>Don't have account,please register <Link to={'/signup'}><Button >Signup</Button></Link></p>
        </div>
    )
}

export default SignIn
