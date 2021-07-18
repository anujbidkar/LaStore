import { useState } from "react";
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Container, Button, Row, Col } from "react-bootstrap";
import { newsLetterSubscribe } from '../../redux/Actions/AuthAction'
import './Footer.scss'
const Footer = () => {
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(newsLetterSubscribe(email))
    setEmail('')
  }

  return (
    <footer className="main-footer">
      <div className="footer-mid">
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

              <Row className='mt-4'>
                <Col sm={6} md={6} lg={6} xl={6}>
                  <div class="footer-about">
                    <h3>CONNECT WITH US</h3>
                    <div class="footer-social-links">
                      <ul>
                        <li>
                          <a href="javascript:;">
                            <i class="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <i class="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <i class="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>


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
            <Col sm={6} md={6} lg={6} xl={6} className='mt-4 text-right'>
              <div class="footer-link">
                <h3>quick links</h3>
                <div class="footer-nav">
                  <ul>
                    <li>
                      <Link
                        to={"/page/about-us"}
                      >
                        about
                      </Link>
                    </li>
                    <li>
                      <Link to={"/page/faqs"}>
                        faqs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/page/privacy-policy"}
                      >
                        privacy policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/page/terms-of-use"}
                      >
                        Terms Of Use
                      </Link>
                    </li>

                  </ul>
                </div>
              </div>
            </Col>
            <Col sm={12} md={12} lg={12} xl={12} className='text-center py-3'>
              copyright &copy; LA Store {new Date().getFullYear()}
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
