import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeScreen from "./screens/HomeScreen";
import { PrivateRoute } from "./PrivateRoute";
import { Container } from "react-bootstrap";
import { isUserLoggedIn } from "./redux/Actions/AuthAction";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import Cart from "./screens/Cart";
import NewCart from "./screens/NewCart";
import Checkout from "./screens/Checkout";
import { getCartItems } from './redux/Actions/CartAction'
import OrderConfirmation from './screens/OrderConfirmation/OrderConfirmation';
import My404Component from './components/My404Component/My404Component'
import OrderList from './screens/OrderList'
import OrderCancel from './components/OrderCancel/OrderCancelPage'
import StaticPages from './components/StaticPages/StaticPages'

const Pages = [
  {
    name: "ProductDetailScreen",
    path: `/productDetail/:id`,
    view: ProductDetailScreen,
  },
  {
    name: "home",
    path: `/`,
    view: HomeScreen,
  },
  {
    name: "cart",
    path: "/cart",
    view: NewCart,
  },
  {
    name: "signUp",
    path: `/signup`,
    view: SignUp,
  },
  {
    name: "signIn",
    path: `/signin`,
    view: SignIn,
  },
  {
    page: 'StaticPages',
    path: '/page/:slug_id',
    view: StaticPages
  }
];

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  useEffect(() => {
    dispatch(isUserLoggedIn());
  }, []);

  // if (true) {
  //   return <Loader />
  // }

  return (
    <>
      <Header />
      <div className='wrap ' id='main'>
        <Switch>
          {Pages.map((page, index) => (
            <Route
              key={index}
              exact
              path={page.path}
              component={() => <page.view page={page.name} />}
            />
          ))}
          <PrivateRoute path='/checkout' component={Checkout} exact />
          <PrivateRoute path='/OrderConfirmation' component={OrderConfirmation} exact />
          <PrivateRoute path='/orderCancel' component={OrderCancel} exact />
          <PrivateRoute path='/orderlist' component={OrderList} exact />
          <Route path='*' exact={true} component={My404Component} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
