import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';
import { Row, Col, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { selectDeparture } from './../../features/selectedDepartureSlice';
import QRCode from 'react-qr-code';

function TicketCard(props) {
  const dispatch = useDispatch();

  const { id, date, departureCity, arrivalCity, departureTime, arrivalTime } =
    props.data;

  const handleSelect = () => {
    dispatch(selectDeparture(props.data));
  };

  return (
    <div className={styles.mainContainer}>
      <div className='card' style={{ width: '18em' }}>
        <div>
          <Container className={styles.busIcon} align='center'>
            <FontAwesomeIcon icon={faBus} size='3x' />
          </Container>
          <div className={styles.descriptionContainer}>
            <Row>
              <Col>
                <h6>Date: </h6>
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

            {/* <Button onClick={() => handleSelect()}>Show QR code</Button> */}
            <QRCode value={id} className={styles.qrCode} />
            {console.log(id)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketCard;
