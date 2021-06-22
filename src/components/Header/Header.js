import React from "react";
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
const Header = () => {
  return (
    <header>
      <Navbar bg='light' variant='light' collapseOnSelect expand='lg'>
        <LinkContainer to='/'>
          <Navbar.Brand href='#home'>
            <img
              src='laLogo.png'
              width='100'
              height='100'
              className='d-inline-block align-top'
              alt='React Bootstrap logo'
            />
          </Navbar.Brand>
          <Navbar.Brand>LA Store</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <LinkContainer to='/'>
              <Nav.Link> Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/product'>
              <Nav.Link> Products</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/signin'>
              <Nav.Link> Sign In</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/'>
              <Form className='d-flex'>
                <FormControl
                  type='search'
                  placeholder='Search...'
                  className='mr-2'
                  aria-label='Search'
                />
                {/* <Button variant='outline-info'>Search</Button> */}
              </Form>
            </LinkContainer>
            <LinkContainer to='/'>
              <Nav.Link>
                <i class='fa fa-shopping-cart' aria-hidden='true'></i>
                Cart (2)
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
