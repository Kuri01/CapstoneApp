import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Bus from '../DeparturesModal/Bus';

const SeatsModal = (props) => {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Pick your seat
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Bus />
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={props.onHide}>
          Add to cart
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SeatsModal;
