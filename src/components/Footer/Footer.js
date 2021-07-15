import { useState } from "react";
import { useDispatch } from 'react-redux'
import { Container, Button, Row, Col } from "react-bootstrap";
import { newsLetterSubscribe } from '../../redux/Actions/AuthAction'

const Footer = () => {
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(newsLetterSubscribe(email))
    setEmail('')
  }

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
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Button onClick={handleSubmit} type='submit' variant='primary' className='m-1 h-1'>
              Subsribe
            </Button>
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
