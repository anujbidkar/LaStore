import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import InputField from '../components/InputField/InputField'
import { signUpAction } from '../redux/Actions/AuthAction'
import { Form, Button } from 'react-bootstrap'

function SignUp(props) {
    console.log(`propsss`, props)
    const dispatch = useDispatch()
    const history = useHistory()
    const { isSignup } = useSelector(state => state.AuthReducer)
    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: ''

    })
    const [err, setError] = useState({})
    useEffect(() => {
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        state[name] = value
        setState({ ...state })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await dispatch(signUpAction(state))
        if (res) {
            history.push('/signin')
        }
    }

    const validateForm = () => {
        let flag = false;
        if (state.name === '') {
            err['name'] = 'name cannot empty'
        }
    }

    return (
        <div className='signup-form'>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <InputField type='text' name='name' value={state.name} placeholder='enter your name..' handleChange={handleChange} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
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
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Confirm Password</Form.Label>
                    <InputField type='password' name='confirm_password' value={state.confirm_password} placeholder='' handleChange={handleChange} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <InputField type='submit' value='submit' />
            </Form>
        </div>
    )
}

export default SignUp
