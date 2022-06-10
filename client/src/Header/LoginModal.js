import React, { useState } from 'react';
import { Modal, Button, Container, Col, Row } from 'react-bootstrap';
import LoginComponent from './LogInComponent';
import SignUp from './SignUp';
import Link from '@mui/material/Link';
import { useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
function LoginModal(props) {
  const [actionType, setActionType] = useState('login');
  const user = useSelector((state) => state.user);

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          {actionType === 'login'
            ? 'Log in to your account'
            : 'Create an account'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container fluid align='center' style={{ height: '500px' }}>
          {user.loading === 'PENDING' ? (
            <Spinner animation='border' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
          ) : (
            <div>
              {actionType === 'login' ? <LoginComponent /> : <SignUp />}
            </div>
          )}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Container fluid align='center'>
          {actionType === 'login' ? (
            <Link
              // onClick={() => setActionType('signUp')}
              variant='body2'
              className='pointer'
            >
              Don't have an account? Sign up
            </Link>
          ) : (
            <Link
              onClick={() => setActionType('login')}
              variant='body2'
              className='pointer'
            >
              Already have an account? Sign in
            </Link>
          )}
        </Container>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginModal;
