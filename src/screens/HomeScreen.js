import React from "react";
import CustomCarousel from "../components/carousel/CustomCarousel.js";
import Loader from "../components/Loader/Loader";
import TrendingProducts from "../components/TrendingProducts/TrendingProducts.js";
import { Row, Col, Container } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <section title='HomeScreen'>
      <CustomCarousel />

      <Container>
        <TrendingProducts name='Trending' />
      </Container>
    </section>
  );
};

export default HomeScreen;
