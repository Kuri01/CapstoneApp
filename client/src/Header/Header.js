import React from 'react';
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
  Button,
  Row,
} from 'react-bootstrap';
import { Link } from 'react-scroll';
import './Styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import Login from './Login/LoginButton';
import { useSelector } from 'react-redux';
import Profile from './Profile/ProfileButton';
import Cart from './Cart';

function Header(props) {
  const user = useSelector((state) => state.user);

  return (
    <Navbar expand='lg' fixed='top' className='test'>
      <Container>
        <Navbar.Brand as={Link} to='section1' className='mx-5 pointer'>
          <FontAwesomeIcon icon={faBus} size='1x' className='px-3' />
          BestBus
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Container fluid />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='section1' className='mx-5 pointer'>
              Search
            </Nav.Link>
            <Nav.Link as={Link} to='section2' className='mx-5 pointer'>
              About
            </Nav.Link>
            <Nav.Link as={Link} to='section3' className='mx-5 pointer'>
              Contact
            </Nav.Link>
            <Container fluid className='d-flex mx-4'>
              {user.auth ? <Profile /> : <Login />}

              <Cart />
            </Container>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
