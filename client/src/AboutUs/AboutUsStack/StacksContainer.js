import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Styles.scss';
import Stack from '../AboutUsStack/Stack';
import Trophy from '../../Images/trophy.png';
import Bus from '../../Images/bus2.png';
import Clients from '../../Images/clients.png';

function StacksContainer(props) {
  return (
    <Container fluid align='center' className='py-5'>
      <Row>
        <Col md={12} lg={4}>
          <Container>
            <Stack
              key={1}
              image={Trophy}
              background='#52649e'
              scaleFrom='scale(0.28)'
              scaleTo='scale(0.26)'
            />

            <p>1st award in most valuable carrier</p>
          </Container>
        </Col>
        <Col md={12} lg={4}>
          <Container>
            <Stack
              key={2}
              image={Bus}
              background='#52649e'
              scaleFrom='scale(0.35)'
              scaleTo='scale(0.32)'
            />

            <p>1st award in most valuable carrier</p>
          </Container>
        </Col>
        <Col md={12} lg={4}>
          <Container>
            <Stack
              key={3}
              image={Clients}
              background='#52649e'
              scaleFrom='scale(0.16)'
              scaleTo='scale(0.144)'
            />

            <p>1st award in most valuable carrier</p>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default StacksContainer;
