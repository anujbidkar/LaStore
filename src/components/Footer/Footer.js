import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className='mt-4'>
          <Col sm={6} md={6} lg={6} xl={6}>
            <img
              src='laLogo.png'
              width='100'
              height='100'
              className='d-inline-block align-top'
              alt='React Bootstrap logo'
            />
          </Col>
          <Col sm={6} md={6} lg={6} xl={6} className='mt-4 text-right'>
            <span>Stay In Touch! Join our Newsletter.</span>
            <br />
            <input
              className='p-1  subsribeFooter'
              placeholder='Enter Your Email Id '
            />
            <button className='btn btn-info m-2'>Subsribe</button>
          </Col>
          <Col sm={12} md={12} lg={12} xl={12} className='text-center py-3'>
            copyright &copy; LA Store 2021
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;