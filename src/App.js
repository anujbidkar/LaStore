import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeScreen from "./screens/HomeScreen";
import { Container } from "react-bootstrap";
import ProductDetailScreen from "./screens/ProductDetailScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className=''>
        <Route path='/' component={HomeScreen} exact />
          <Route
            path='/productDetail/:id'
            component={ProductDetailScreen}
            exact
          />
      </main>

      <Footer />
    </Router>
  );
}

export default App;
