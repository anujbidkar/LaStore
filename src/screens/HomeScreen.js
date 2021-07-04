import { useEffect } from "react";
import Loader from "../components/Loader/Loader";
import { useDispatch, useSelector } from 'react-redux'
import TrendingProducts from "../components/TrendingProducts/TrendingProducts.js";
import { Row, Col, Container } from "react-bootstrap";
import Slider from "../components/carousel/Slider.js";
import { getProductData } from '../redux/Actions/ProudctAction'

const HomeScreen = () => {
  let dispatch = useDispatch()

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = () => {
    dispatch(getProductData())
  }

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
