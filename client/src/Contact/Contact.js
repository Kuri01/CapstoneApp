import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Location from '../Images/placeholder.png';
import Telephone from '../Images/telephone.png';
import Gmail from '../Images/gmail.png';
import './Styles.scss';
function Contact(props) {
  return (
    <Container fluid align='center' className='footer py-4' id='section3'>
      <Row>
        <Col md={12} lg={4} className='py-3 d-lg-block'>
          <Container
            fluid
            align='center'
            className='d-flex justify-content-center'
          >
            <div className='px-4 '>
              <img
                src={Location}
                style={{ width: '64px', height: '64px' }}
                alt='location'
              />
            </div>
            <div style={{ textAlign: 'left', color: 'white' }}>
              <h4>Find us</h4>
              <p>some street, some city</p>
            </div>
          </Container>
        </Col>
        <Col md={12} lg={4} className='py-3 d-lg-block'>
          <Container
            fluid
            align='center'
            className='d-flex justify-content-center'
          >
            <div className='px-4 '>
              <img
                src={Telephone}
                style={{ width: '64px', height: '64px' }}
                alt='phone'
              />
            </div>
            <div style={{ textAlign: 'left', color: 'white' }}>
              <h4>Call us</h4>
              <p>+48 32189893218</p>
            </div>
          </Container>
        </Col>
        <Col md={12} lg={4} className='py-3 d-lg-block'>
          <Container
            fluid
            align='center'
            className='d-flex justify-content-center'
          >
            <div className='px-4 '>
              <img
                src={Gmail}
                style={{ width: '64px', height: '64px' }}
                alt='phone'
              />
            </div>
            <div style={{ textAlign: 'left', color: 'white' }}>
              <h4>Mail us</h4>
              <p>someone@bestbus.com</p>
            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
