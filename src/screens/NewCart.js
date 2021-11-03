import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  Container,
} from "react-bootstrap";
// import Message from "../components/Message";
// import { addToCart, removeFromCart } from "../actions/cartActions";
import {
  getCartItems,
  addQuantityToCart,
  subtractQuantityFromCart,
  removeItemFromCart,
} from "../redux/Actions/CartAction";
import "./cart.css";
import CartTotal from "../components/CartTotal/CartTotal";
const NewCart = () => {

  const [subTotal, setSubTotal] = useState(0);
  //   const productId = match.params.id;

  //   const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  //   const cart = useSelector((state) => state.cart);
  //   const { cartItemsList } = cart;

  //   const dispatch = useDispatch()
  const { cartItemsList, total } = useSelector((state) => state.CartReducer);

  useEffect(() => {
    fetchCartItems();

    
  }, [cartItemsList.length]);

  const fetchCartItems = () => {
    dispatch(getCartItems());
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleAddQuantity = (id) => {
    dispatch(addQuantityToCart(id));
  };

  const handleSubtractQuantity = (id) => {
    dispatch(subtractQuantityFromCart(id));
  };

  return (
    <Container className='p-5'>
      <Row className=''>
        <Col md={9}>
          <h1>Shopping Cart</h1>
          {cartItemsList.length === 0 ? (
            <div>
              Your cart is empty <Link to='/'>Go Back</Link>
            </div>
          ) : (
            <ListGroup variant='flush'>
              <table className='table  table-striped table-hover table-bordered'>
                <thead></thead>
                <tr>
                  <th>Image</th>
                  <th> Name</th>
                  <th> Price</th>
                  <th> Qty</th>
                  <th> Total</th>
                  <th> Actions</th>
                </tr>

                <tbody>
                  {cartItemsList &&
                    cartItemsList.map((item) => (
                      <tr>
                        <td>
                          {" "}
                          <Image
                            height='100px'
                            src={item.image}
                            alt={item.name}
                            rounded
                          />
                        </td>
                        <td>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </td>
                        <td>$ {item.price}</td>
                        <td>
                          <Button
                            disabled={item.quantity <= 1}
                            type='button'
                            variant='light'
                            className='btn-sm mr-1'
                            onClick={() => handleSubtractQuantity(item._id)}
                          >
                            <i className='fas fa-minus '></i>
                          </Button>
                          {item.quantity}
                          {/* <b>Quantity: {item.quantity}</b> */}

                          <Button
                            type='button'
                            variant='light'
                            className='btn-sm ml-1'
                            onClick={() => handleAddQuantity(item._id)}
                          >
                            <i className='fas fa-plus '></i>
                          </Button>
                        </td>

                        <td>$ {item.price * item.quantity}</td>

                        <td>
                          <Button
                            type='button'
                            variant='light'
                            onClick={() => handleRemoveItem(item._id)}
                          >
                            <i className='fas fa-trash'></i>
                          </Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </ListGroup>
          )}
        </Col>
        <Col md={3}>
          <Card className='mt-5'>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>
                  Subtotal {subTotal} (
                  {cartItemsList.reduce((acc, item) => acc + item.quantity, 0)})
                  items
                </h3>
                Final Amount : $
                {cartItemsList
                  .reduce((acc, item) => acc + item.quantity * item.price, 0)
                  .toFixed(2)}
              </ListGroup.Item>
              <ListGroup.Item>
              {cartItemsList.reduce((acc, item) => acc + item.quantity, 0) > 0 ? ( <Link to='/checkout' className='btn btn-primary btn-block'>
                   Proceed To Checkout
                 </Link>) : null }
              
                  
              
               
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NewCart;
