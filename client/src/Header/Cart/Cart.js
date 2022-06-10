import React, { useState } from 'react';
import { Offcanvas, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import CartCard from './CartCard';
import { useDispatch, useSelector } from 'react-redux';

function Cart(props) {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.data);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(false);

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
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.map((element) => (
            <CartCard element={element} />
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Cart;
