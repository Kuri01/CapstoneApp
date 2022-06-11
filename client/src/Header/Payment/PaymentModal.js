import React from 'react';
import { Modal } from 'react-bootstrap';
import { PaymentScreen } from './PaymentScreen';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../features/cartSlice';

function Payment(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.data);
  const deleteAllFromCart = () => dispatch(clearCart());
  return (
    <Modal show={props.show} fullscreen onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Payment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <PaymentScreen
          cart={cart}
          onHide={props.onHide}
          hideCart={props.hideCart}
          clearCart={deleteAllFromCart}
        />
      </Modal.Body>
    </Modal>
  );
}

export default Payment;
