
const InputField = ({ type, name, value, handleChange }) => {
    return (
        <div>
            <input
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                autocomplete="off" />
        </div>
    )
}
export default InputField
