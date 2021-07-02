import { Form } from 'react-bootstrap'
const InputField = ({ type, name, value, handleChange }) => {
    return (
        <div>
            <Form.Control
                required
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                autocomplete="off" />
        </div>
    )
}
export default InputField
