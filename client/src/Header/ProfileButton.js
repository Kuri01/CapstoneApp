import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserSlash } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap';
import ProfileModal from './ProfileModal';

function Profile(props) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Nav.Link className='mx-2'>
        <FontAwesomeIcon
          icon={faUser}
          size='lg'
          className='px-1'
          onClick={() => setShow(true)}
        />
        <ProfileModal show={show} setShow={setShow} />
      </Nav.Link>
    </div>
  );
}

export default Profile;
