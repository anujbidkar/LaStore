import { useEffect, useState } from 'react'
import InputField from '../components/InputField/InputField'

function SignIn() {
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

    const handleSubmit = (e) => { }

    return (
        <div>
            <form>
                <InputField type='text' name='email' value={state.email} placeholder='' handleChange={handleChange} />
                <InputField type='password' name='password' value={state.password} placeholder='' handleChange={handleChange} />
                <InputField type='submit' value='submit' />
            </form>
        </div>
    )
}

export default SignIn
