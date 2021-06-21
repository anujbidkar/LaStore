import React from "react";
import Loader from "../Loader/Loader";
import "./TrendingProducts.css";
import ProductList from "../ProductList/ProductList";
import { Row, Col, Container } from "react-bootstrap";

const TrendingProducts = (props) => {
  return (
    <section title='Trending Products'>
      <h1 className='text-center trendingHeading'>--- {props.name} --- </h1>

      <>
        <Row>
          <Col sm={12} md={6} lg={4} xl={3}>
            <ProductList />
          </Col>
          <Col sm={12} md={6} lg={4} xl={3}>
            <ProductList />
          </Col>
          <Col sm={12} md={6} lg={4} xl={3}>
            <ProductList />
          </Col>
          <Col sm={12} md={6} lg={4} xl={3}>
            <ProductList />
          </Col>
          <Col sm={12} md={6} lg={4} xl={3}>
            <ProductList />
          </Col>
          <Col sm={12} md={6} lg={4} xl={3}>
            <ProductList />
          </Col>
          <Col sm={12} md={6} lg={4} xl={3}>
            <ProductList />
          </Col>
          <Col sm={12} md={6} lg={4} xl={3}>
            <ProductList />
          </Col>
        </Row>
      </>
    </section>
  );
};

export default TrendingProducts;
