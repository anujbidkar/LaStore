import React from "react";
import Loader from "../components/Loader/Loader";
import TrendingProducts from "../components/TrendingProducts/TrendingProducts.js";
import { Row, Col, Container } from "react-bootstrap";
import Slider from "../components/carousel/Slider.js";

const HomeScreen = () => {
  return (
    <section title='HomeScreen'>
      <Slider />
      <Container>
        <TrendingProducts name='Trending' />
      </Container>
    </section>
  );
};

export default HomeScreen;
