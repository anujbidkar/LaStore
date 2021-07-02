import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
  Container,
} from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux'
import Rating from "../components/Rating/Rating";
import TrendingProducts from "../components/TrendingProducts/TrendingProducts.js";
import { getProductDetailsById } from '../redux/Actions/ProudctAction'
import { addItemInCart, getCartItems } from '../redux/Actions/CartAction'

const ProductDetailScreen = () => {
  const dispatch = useDispatch()
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const { id } = useParams()
  const { productDetails } = useSelector(state => state.ProductReducer)
  const { cartItemsList,total } = useSelector(state => state.CartReducer)

  useEffect(() => {
    fetchProductDetails()
  }, []);

  useEffect(() => {
    getCartItems()
  }, [cartItemsList])

  const fetchProductDetails = () => {
    dispatch(getProductDetailsById(id))
  }

  const handleAddItemToCart = (item) => {
    dispatch(addItemInCart(item, qty))
  }


  return (
    <>
      {productDetails &&
        <>
          <Link className='btn btn-light my-3' to='/'>
            Go Back
          </Link>

          <>
            <Row>
              <Col sm={12} md={6} lg={6} xl={6}>
                <Image
                  src={productDetails.image}
                  alt='Product Name fluid'
                  className='img-fluid'
                />
              </Col>
              <Col sm={6} md={3} lg={3} xl={3}>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <h3>Product Name</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Rating value='5' text={` 10 reviews`} />
                  </ListGroup.Item>
                  <ListGroup.Item>Price: $400</ListGroup.Item>
                  <ListGroup.Item>Description: Testing Description</ListGroup.Item>
                </ListGroup>
              </Col>
              <Col sm={6} md={3} lg={3} xl={3}>
                <Card>
                  <ListGroup variant='flush'>
                    <ListGroup.Item>
                      <Row>
                        <Col>Price:</Col>
                        <Col>
                          <strong>$ 400</strong>
                        </Col>
                      </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Row>
                        <Col>Status:</Col>
                        <Col>In Stock</Col>
                      </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Control
                            as='select'
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Button className='btn-block' type='button' onClick={() => handleAddItemToCart(productDetails)}>
                        Add To Cart
                      </Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={6} lg={6} xl={6}>
                <h2>Reviews</h2>

                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <strong>Anuj</strong>
                    <Rating value='4' />
                    <p>4 pm</p>
                    <p>Testing Comment</p>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <h2>Write a Customer Review</h2>

                    <Form>
                      <Form.Group controlId='rating'>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                          as='select'
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value=''>Select...</option>
                          <option value='1'>1 - Poor</option>
                          <option value='2'>2 - Fair</option>
                          <option value='3'>3 - Good</option>
                          <option value='4'>4 - Very Good</option>
                          <option value='5'>5 - Excellent</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId='comment'>
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                          as='textarea'
                          row='3'
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                      <Button type='submit' variant='primary'>
                        Submit
                      </Button>
                    </Form>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <Container>
                  <TrendingProducts name='Releted Products' />
                </Container>
              </Col>
            </Row>
          </>
        </>
      }
    </>
  );
};

export default ProductDetailScreen;
