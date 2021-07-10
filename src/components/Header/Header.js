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
import { Route } from "react-router-dom";
import SearchBox from "../SearchBox/SearchBox";

import { useSelector } from "react-redux";
const Header = () => {
  const { cartItemsList } = useSelector((state) => state.CartReducer);
  const { userDetails } = useSelector((state) => state.AuthReducer);
  return (
    // <header>
    //   <Navbar bg='light' variant='light' collapseOnSelect expand='lg'>
    //     <LinkContainer to='/'>
    //       <Navbar.Brand>
    //         <img
    //           src='laLogo.png'
    //           width='100'
    //           height='100'
    //           className='d-inline-block align-top'
    //           alt='React Bootstrap logo'
    //         />
    //       </Navbar.Brand>
    //       {/* <Navbar.Brand>LA Store</Navbar.Brand> */}
    //     </LinkContainer>
    //     <Navbar.Toggle aria-controls='basic-navbar-nav' />
    //     <Navbar.Collapse id='basic-navbar-nav'>
    //       <Nav className='ml-auto'>
    //         <LinkContainer to='/'>
    //           <Nav.Link> Home</Nav.Link>
    //         </LinkContainer>
    //         <LinkContainer to='/signin'>
    //           <Nav.Link> Sign In</Nav.Link>
    //         </LinkContainer>

    //         {userDetails.name ? (
    //           <LinkContainer to='/signin'>
    //             <Nav.Link> My Account</Nav.Link>
    //           </LinkContainer>
    //         ) : (
    //           <LinkContainer to='/signin'>
    //             <Nav.Link> Sign In</Nav.Link>
    //           </LinkContainer>
    //         )}
    //         <LinkContainer to='/'>
    //           <Form className='d-flex'>
    //             <FormControl
    //               type='search'
    //               placeholder='Search...'
    //               className='mr-2'
    //               aria-label='Search'
    //             />
    //             {/* <Button variant='outline-info'>Search</Button> */}
    //           </Form>
    //         </LinkContainer>
    //         <LinkContainer to='/cart'>
    //           <Nav.Link>
    //             <i className='fa fa-shopping-cart' aria-hidden='true'></i>
    //             Cart {cartItemsList.length}
    //           </Nav.Link>
    //         </LinkContainer>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Navbar>
    // </header>
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>LA Store</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Route render={({ history }) => <SearchBox history={history} />} />
            <Nav className='ml-auto'>
              <LinkContainer to='/'>
                <Nav.Link>
                  <i className='fas fa-home'></i> Home
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/signin'>
                <Nav.Link>
                  <i className='fas fa-user'></i> Sign In
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cart{" "}
                  {cartItemsList.length}
                </Nav.Link>
              </LinkContainer>
              <NavDropdown title={"Anuj"} id='username'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/admin/orderlist'>
                  <NavDropdown.Item>Orders</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={""}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
