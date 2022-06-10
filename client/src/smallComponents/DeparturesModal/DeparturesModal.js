import { Modal, Button, Container, Row, Col, Spinner } from 'react-bootstrap';
import styles from './styles.module.scss';
import Bus from './Bus';
import DepartureCard from '../DepartureCard/DepartureCard';

import { useSelector } from 'react-redux';
const SeatsModal = (props) => {
  const departures = useSelector((state) => state.departures.data);
  const loading = useSelector((state) => state.departures.loading);
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
          minHeight: '600px',
          justifyContent: 'center',
          textAlign: 'center',
          alignItems: 'center',
        }}
      >
        {loading === 'PENDING' ? (
          <Spinner animation='border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        ) : (
          ''
        )}

        {departures.length === 0 && loading === 'FULFILLED' ? (
          <h1>No buses avaible! </h1>
        ) : (
          <div className={styles.departureCardsContainer}>
            {departures.map((element) => (
              <DepartureCard key={element.id} data={element} />
            ))}
          </div>
        )}
        {loading === 'REJECTED' ? <h1>Something went wrong...</h1> : ''}
      </Modal.Body>
    </Modal>
  );
};

export default SeatsModal;
