import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import StacksContainer from './AboutUsStack/StacksContainer';
import BusGif from '../Images/busgif.gif';
import './Styles.scss';
function AboutUs(props) {
  return (
    <Container fluid align='center' className='something'>
      <div className='title'>
        <h1>Who are we?</h1>
        <p>At least for now 😄</p>
      </div>

      <Container className='py-2 my-2'>
        <Row>
          <Col md={12} lg={6} className='py-5 my-5'>
            <img src={BusGif} alt='bus' />
          </Col>
          <Col md={12} lg={6} className='py-5 my-5'>
            <Container fluid align='left'>
              <h4>Lorem ipsum</h4>
              <p>
                Dolore elit excepteur elit eu ipsum est. Deserunt aliqua
                excepteur aliquip quis mollit sunt minim consectetur. Incididunt
                culpa voluptate exercitation culpa labore nisi. Aute excepteur
                qui velit pariatur ipsum enim eu ipsum veniam deserunt cupidatat
                ea. Aliqua excepteur nisi incididunt culpa dolore pariatur non
                mollit ipsum. Proident ullamco tempor dolor ex consequat ipsum
                mollit duis. Ex ipsum fugiat quis officia eiusmod consectetur
                nostrud commodo sint veniam excepteur velit veniam. Cupidatat ea
                aute incididunt incididunt consectetur eu cillum aliquip commodo
                mollit. Sint commodo et ipsum deserunt. Aliqua culpa nostrud
                cillum officia duis qui consequat labore elit voluptate
                excepteur tempor nisi quis. Sint laborum dolore cupidatat eu
                quis ullamco minim amet anim excepteur tempor deserunt qui
                tempor.
              </p>
            </Container>
          </Col>
        </Row>
      </Container>
      <StacksContainer />
    </Container>
  );
}

export default AboutUs;
