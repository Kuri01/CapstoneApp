import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { SvgIcon } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from './styles.module.scss';

function CartCard(props) {
  const { date, departureCity, arrivalCity, departureTime, arrivalTime } =
    props.element.details.info;

  return (
    <Card body className='my-2'>
      <Row>
        <Col className='px-0'>
          <Container fluid align='center' className='px-0'>
            <h5>{departureCity}</h5>
            <p>{departureTime}</p>
          </Container>
        </Col>
        <Col xs={4}>
          <Container fluid align='center' className='px-0'>
            <SvgIcon
              className={styles.arrowIcon}
              component={ArrowForwardIcon}
            />
          </Container>
        </Col>
        <Col className='px-0'>
          <Container fluid align='center' className='px-0'>
            <h5>{arrivalCity}</h5>
            <p>{arrivalTime}</p>
          </Container>
        </Col>
      </Row>
      <Container fluid align='center'>
        {date}
      </Container>
    </Card>
  );
}

export default CartCard;
