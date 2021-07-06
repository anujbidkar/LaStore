import { Form } from 'react-bootstrap'
const InputField = ({ type, name, value, handleChange,placeholder,require }) => {
  
    return (
        <div>
            <Form.Control
                required ={require}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
                autoComplete="off" />
        </div>
    )
}
export default InputField
