import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "../Rating/Rating";

const ProductList = () => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/productDetail/2`}>
        <Card.Img
          src='https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80'
          variant='top'
        />
      </Link>

      <Card.Body>
        <Link to={`/productDetail`}>
          <Card.Title as='div'>
            <strong>ABC</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating value='4' text={`5 reviews`} />
        </Card.Text>

        <Card.Text as='h3'>$ 400 </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductList;
