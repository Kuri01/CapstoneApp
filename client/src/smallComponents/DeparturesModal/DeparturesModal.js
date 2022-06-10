import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal, Button, Container, Row, Col, Spinner } from 'react-bootstrap';
import styles from './styles.module.scss';
import Bus from './Bus';
import DepartureCard from '../DepartureCard/DepartureCard';
import SeatsModal from '../SeatsModal/SeatsModal';

const DeparturesModal = (props) => {
  const departures = useSelector((state) => state.departures.data);
  const loading = useSelector((state) => state.departures.loading);
  const [seatsModalShow, setSeatsModalShow] = useState(false);
  return (
    <Modal
      {...props}
      size='xl'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          <h4>Pick departure bus</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        className={styles.modalBody}
        align='center'
        style={{
          minHeight: '400px',
          justifyContent: 'center',
          textAlign: 'center',
          alignItems: 'center',
        }}
      >
        <SeatsModal
          show={seatsModalShow}
          onHide={() => setSeatsModalShow(false)}
        />
        {loading === 'PENDING' ? (
          <div className={styles.itemsContainer}>
            <Spinner animation='border' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
          </div>
        ) : (
          ''
        )}

        {departures.length === 0 && loading === 'FULFILLED' ? (
          <h1>No buses avaible! </h1>
        ) : (
          <div className={styles.departureCardsContainer}>
            {departures.map((element) => (
              <DepartureCard
                key={element.id}
                data={element}
                showSeats={setSeatsModalShow}
              />
            ))}
          </div>
        )}
        {loading === 'REJECTED' ? (
          <div className={styles.itemsContainer}>
            <h1>Something went wrong...</h1>
          </div>
        ) : (
          ''
        )}
      </Modal.Body>
    </Modal>
  );
};

export default DeparturesModal;
