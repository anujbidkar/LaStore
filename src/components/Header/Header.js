import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Redirect } from "react-router";

import { Route, useHistory } from "react-router-dom";
import SearchBar from "../SearchBox/SearchBar";

import { useSelector, useDispatch } from "react-redux";
const Header = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { cartItemsList } = useSelector((state) => state.CartReducer);
  const { userDetails } = useSelector((state) => state.AuthReducer);
  const { productList } = useSelector((state) => state.ProductReducer);
  console.log("productData", productList);
  // setmyProductData(productList);

  const [myProductData, setmyProductData] = useState([]);
  // useEffect(() => {
  //   console.log("myDaat", productList);
  //   setmyProductData(productList);
  // }, []);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });

    history.push("/");

    // return <Redirect to='/' />;
  };

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>LA Store</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Route
              render={({ history }) =>
                myProductData ? (
                  <SearchBar
                    data={productList}
                    placeholder='Search Products...'
                  />
                ) : null
              }
            />
            <Nav className='ml-auto'>
              <LinkContainer to='/'>
                <Nav.Link>
                  <i className='fas fa-home'></i> Home
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cart{" "}
                  {cartItemsList.length}
                </Nav.Link>
              </LinkContainer>
              {Object.keys(userDetails).length ? (
                <NavDropdown title={userDetails.name} id='username'>
                  {/* <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer> */}
                  <LinkContainer to='/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/signin'>
                  <Nav.Link>sigin</Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
