import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserSlash } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap';
import LoginModal from './LoginModal';

function Login(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Nav.Link className='mx-2'>
        <FontAwesomeIcon
          icon={faUserSlash}
          size='lg'
          className='px-1'
          onClick={() => setModalShow(true)}
        />
        <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
      </Nav.Link>
    </div>
  );
}

export default Login;
