import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Bus from './Bus';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './../../features/cartSlice';
import { Spinner } from 'react-bootstrap';

const SeatsModal = (props) => {
  const dispatch = useDispatch();

  const selectedDeparture = useSelector((state) => state.selected.data);

  const [picked, setPicked] = useState(null);

  const handlePickSeat = (seat, element) => {
    if (picked === null) {
      setPicked(seat);
    } else {
      setPicked(null);
    }
  };

  const handleAddToCart = () => {
    const {
      price,
      date,
      departureCity,
      arrivalCity,
      departureTime,
      arrivalTime,
    } = selectedDeparture.description;
    const newItem = {
      id: selectedDeparture.id,
      details: {
        seat: picked,
        info: {
          price,
          date,
          departureCity,
          arrivalCity,
          departureTime,
          arrivalTime,
        },
      },
    };
    dispatch(addToCart(newItem));
    props.onHide();
    setPicked(null);
  };

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
        {selectedDeparture === null ? (
          <Spinner animation='border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        ) : (
          <Bus
            seats={selectedDeparture.description.seats}
            picked={picked}
            handlePickSeat={handlePickSeat}
          />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button
          disabled={picked !== null ? false : true}
          variant='secondary'
          onClick={() => handleAddToCart()}
        >
          Add to cart
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SeatsModal;
