import React from 'react';
import {
  Col,
  Figure,
  Modal,
  Row,
  Container,
  CloseButton,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Man from '../../Images/man.png';
import Woman from '../../Images/woman.png';
import ProfileTabs from './ProfileTabs';
import Stack from '../../AboutUs/AboutUsStack/Stack';
import axios from 'axios';
import { API_URL } from '../../API_FROZEN_OBJ';
function ProfileModal(props) {
  const user = useSelector((state) => state.user.userDetails);

  return (
    <div>
      <Modal show={props.show} fullscreen={true}>
        <Modal.Header
          onClick={() => props.setShow(false)}
          style={{ height: '10vh', padding: 0, margin: 0 }}
        >
          <Modal.Title className='mx-3 px-3'>
            Welcome back, {user.name}!
          </Modal.Title>
          <div className='mx-auto'></div>
          <CloseButton className='mx-3 px-3' />
        </Modal.Header>
        <Modal.Body style={{ margin: 0, padding: 0 }}>
          <Container fluid>
            <Row>
              <Col
                md={12}
                lg={2}
                style={{ borderRight: '2px solid black', height: '90vh' }}
              >
                <Container fluid align='center' className='py-3 px-3'>
                  <div>
                    <Figure>
                      <Figure.Image
                        width={171}
                        height={180}
                        alt='171x180'
                        src={user.gender === 'man' ? Man : Woman}
                      />
                    </Figure>
                  </div>
                  <div>
                    <h4>Personal details:</h4>
                    <p>Name: {user.name}</p>
                    <p>Surname: {user.surname}</p>
                    <p>E-mail: {user.email}</p>
                  </div>
                </Container>
              </Col>
              <Col className='mx-0 px-0'>
                <div>
                  <ProfileTabs />
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ProfileModal;
