import { useEffect } from 'react'
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from './components/Loader/Loader'
import { useSelector, useDispatch } from 'react-redux'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeScreen from "./screens/HomeScreen";
import { Container } from "react-bootstrap";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import SignUp from './screens/SignUp';
import SignIn from "./screens/SignIn";
import Cart from "./screens/Cart";
import Checkout from './screens/Checkout';
import { getCartItems } from './redux/Actions/CartAction'
// import PrivateRoute from './PrivateRoute'


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
  },
  {
    name: 'signUp',
    path: `/signup`,
    view: SignUp
  },
  {
    name: 'signIn',
    path: `/signin`,
    view: SignIn
  }, {
    name: 'Checkout',
    path: '/checkout',
    view: Checkout
  }
]

function App() {
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartItems())
  }, [])

  // if (true) {
  //   return <Loader />
  // }

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
