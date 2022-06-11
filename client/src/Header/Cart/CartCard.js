import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { SvgIcon } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './styles.module.scss';
import { useDispatch } from 'react-redux';
import { removeFromCart } from './../../features/cartSlice';
function CartCard(props) {
  const dispatch = useDispatch();

  const {
    price,
    date,
    departureCity,
    arrivalCity,
    departureTime,
    arrivalTime,
  } = props.element.details.info;
  const handleDelete = (event) => {
    event.preventDefault();
    dispatch(removeFromCart(props.element.cartId));
  };

  return (
    <Card>
      <Card.Body className='my-2'>
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
          <Row>
            <Col style={{ textAlign: 'left' }}> {date}</Col>{' '}
            <Col style={{ textAlign: 'center' }}>${price}</Col>
            <Col style={{ textAlign: 'right' }}>
              <Container>
                <SvgIcon
                  component={DeleteIcon}
                  className='pointer'
                  onClick={handleDelete}
                />
              </Container>
            </Col>{' '}
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default CartCard;
