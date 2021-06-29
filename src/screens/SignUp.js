import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputField from '../components/InputField/InputField'
import { signUpAction } from '../redux/Actions/AuthAction'

function SignUp() {
    const dispatch = useDispatch()
    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: ''

    })
    useEffect(() => {
        console.log("hello world")
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        state[name] = value
        setState({ ...state })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(signUpAction(state))
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <InputField type='text' name='name' value={state.name} placeholder='enter your name..' handleChange={handleChange} />
                <InputField type='text' name='email' value={state.email} placeholder='' handleChange={handleChange} />
                <InputField type='password' name='password' value={state.password} placeholder='' handleChange={handleChange} />
                <InputField type='password' name='confirm_password' value={state.confirm_password} placeholder='' handleChange={handleChange} />
                <InputField type='submit' value='submit' />
            </form>
        </div>
    )
}

export default SignUp
