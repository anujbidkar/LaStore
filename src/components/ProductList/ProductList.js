import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "../Rating/Rating";
import './ProductList.css';
const ProductList = ({ product }) => {
  return (
    <Card className='hoverEffect my-3 p-3 rounded ' >
      <Link to={`/productDetail/${product._id}`}>
        <Card.Img src={product.image} variant='top' height='250px' />
      </Link>

      <Card.Body>
        <Link to={`/productDetail/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating value={product.rating} text={product.rating} />
        </Card.Text>

        <Card.Text as='h3'>$ {product.price} </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductList;
