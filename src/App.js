import { useEffect } from 'react'
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeScreen from "./screens/HomeScreen";
import { Container } from "react-bootstrap";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import SignUp from './screens/SignUp';
import SignIn from "./screens/SignIn";
import Cart from "./screens/Cart";
import { getCartItems } from './redux/Actions/CartAction'


const Pages = [
  {
    name: 'ProductDetailScreen',
    path: `/productDetail/:id`,
    view: ProductDetailScreen
  },
  {
    name: 'home',
    path: `/`,
    view: HomeScreen
  },
  {
    name: 'cart',
    path: '/cart',
    view: Cart
  }
]

function App() {
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartItems())
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Switch>
          {
            Pages.map((page, index) => <Route key={index} exact path={page.path} component={() => <page.view page={page.name} />} />)
          }
          {/* <Route path='*' exact={true} component={My404Component} /> */}
        </Switch>
      </Container>
      <Footer />
    </>
  );
}

export default App;
