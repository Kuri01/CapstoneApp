import React, { useState } from 'react';
import { Offcanvas, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import CartCard from './CartCard';
import { useSelector } from 'react-redux';
import Payment from '../Payment/PaymentModal';
import uuid from 'react-uuid';

function Cart(props) {
  const cart = useSelector((state) => state.cart.data);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [showModalPayment, setShowModalPayment] = useState(false);
  const handleProcessPayment = () => {
    setShowModalPayment(true);
  };

  return (
    <div>
      <Nav.Link className='mx-2'>
        <FontAwesomeIcon
          icon={faBasketShopping}
          size='lg'
          className='px-1'
          onClick={() => setShow(true)}
        />
      </Nav.Link>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <FontAwesomeIcon
              icon={faBasketShopping}
              size='lg'
              className='px-1'
            />{' '}
            Cart
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.length !== 0 ? (
            <div>
              {cart.map((element) => (
                <CartCard key={uuid()} element={element} />
              ))}
            </div>
          ) : (
            <h4>Cart is empty!</h4>
          )}
          <Payment />
        </Offcanvas.Body>
        <Button
          disabled={cart.length !== 0 ? false : true}
          variant='secondary'
          className='px-2 py-2'
          onClick={handleProcessPayment}
        >
          Proceed payment
        </Button>
      </Offcanvas>
      <Payment
        show={showModalPayment}
        onHide={() => setShowModalPayment(false)}
        hideCart={() => setShow(false)}
      />
    </div>
  );
}

export default Cart;
