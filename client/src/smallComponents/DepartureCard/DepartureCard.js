import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';
import { Row, Col, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { selectDeparture } from './../../features/selectedDepartureSlice';

function DepartureCard(props) {
  const dispatch = useDispatch();

  const { date, departureCity, arrivalCity, departureTime, arrivalTime } =
    props.data.description;

  const handleSelect = () => {
    dispatch(selectDeparture(props.data));
    console.log(props.data);
  };

  return (
    <div className={styles.mainContainer}>
      <div className='card' style={{ width: '18em' }}>
        <div>
          <div className={styles.busIcon}>
            <FontAwesomeIcon icon={faBus} size='xl' />
          </div>
          <div className={styles.descriptionContainer}>
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

            <Row>
              <Col>
                <h6>Free seats: </h6>
              </Col>
              <Col>15</Col>
            </Row>
            <Button onClick={() => handleSelect()}>Pick this bus</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepartureCard;
