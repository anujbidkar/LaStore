function CartTotal(props) {
    return (
        <div>
            subtotal :{props.total}
            taxes : -
            shippin amount : -
            total : {props.total}
        </div>
    )
}

export default CartTotal
