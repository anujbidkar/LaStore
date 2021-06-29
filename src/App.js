import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeScreen from "./screens/HomeScreen";
import { Container } from "react-bootstrap";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import SignUp from './screens/SignUp';
import SignIn from "./screens/SignIn";

function App() {
  return (
    <Router>
      <Header />
<<<<<<< HEAD
      <main className=''>
        <Route path='/' component={HomeScreen} exact />
          <Route
            path='/productDetail/:id'
            component={ProductDetailScreen}
            exact
          />
      </main>
=======
      <Switch>
        <Container>
          <main className=''>
            <Route path='/' component={HomeScreen} exact />
            <Route
              path='/productDetail/:id'
              component={ProductDetailScreen}
              exact
            />
            <Route
              path='/signup'
              component={SignUp}
              exact />
>>>>>>> feature/21-register

            <Route
              path='/signin'
              component={SignIn}
              exact />
          </main>
        </Container>

        <Footer />
      </Switch>
    </Router>
  );
}

export default App;
