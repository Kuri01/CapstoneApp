import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';
import { Row, Col, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { selectDeparture } from './../../features/selectedDepartureSlice';

function DepartureCard(props) {
  const dispatch = useDispatch();

  const { date, departureCity, arrivalCity, departureTime, arrivalTime } =
    props.data.description;

  const handleSelect = () => {
    props.showSeats(true);
    dispatch(selectDeparture(props.data));
  };

  return (
    <div className={styles.mainContainer}>
      <div className='card' style={{ width: '18em' }}>
        <div>
          <div className={styles.busIcon}>
            <FontAwesomeIcon icon={faBus} size='4x' />
          </div>
          <div className={(styles.descriptionContainer, 'py-3')}>
            <Row>
              <Col>
                <h6>Date </h6>
              </Col>
              <Col>{date}</Col>
            </Row>
            <Row>
              <Col>
                <h6>From: </h6>
              </Col>
              <Col>{departureCity}</Col>
            </Row>
            <Row>
              <Col>
                <h6>To: </h6>
              </Col>
              <Col>{arrivalCity}</Col>
            </Row>
            <Row>
              <Col>
                <h6>Departure: </h6>
              </Col>
              <Col>{departureTime}</Col>
            </Row>
            <Row>
              <Col>
                <h6>Arrival: </h6>
              </Col>
              <Col>{arrivalTime}</Col>
            </Row>
          </div>
          <Container fluid align='center' className='py-3'>
            <Button variant='secondary' onClick={() => handleSelect()}>
              Pick this bus
            </Button>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default DepartureCard;
