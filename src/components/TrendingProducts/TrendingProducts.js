import React from "react";
import Loader from "../Loader/Loader";
import { useSelector } from 'react-redux'
import "./TrendingProducts.css";
import ProductList from "../ProductList/ProductList";
import { Row, Col, Container } from "react-bootstrap";

const TrendingProducts = (props) => {
  let { productList } = useSelector(state => state.ProductReducer)
  return (
    <section title='Trending Products'>
      <h1 className='text-center trendingHeading'>--- {props.name} --- </h1>

      <>
        <Row>
          {productList.map((item, index) => {
            return (
              <Col sm={12} md={6} lg={4} xl={3}>
                <ProductList product={item} />
              </Col>
            )
          })}
        </Row>
      </>
    </section>
  );
};

export default TrendingProducts;
