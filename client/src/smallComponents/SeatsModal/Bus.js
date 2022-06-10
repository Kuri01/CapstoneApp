import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';

function Bus(props) {
  const handlePickSeat = props.handlePickSeat;
  const picked = props.picked;
  const seats = props.seats;

  return (
    <Container fluid className={styles.seatsRow} align='center'>
      {seats.map((element) => (
        <div className={styles.seatColumn} key={element.name}>
          <p className={styles.colName}>{element.name.toUpperCase()}</p>

          {element.seats.map((seat) => {
            if (seat.display) {
              return (
                <Button
                  variant='danger'
                  disabled={
                    (picked !== null &&
                      (picked.name !== element.name ||
                        picked.seat.id !== seat.id)) ||
                    !seat.free
                      ? true
                      : false
                  }
                  onClick={() =>
                    handlePickSeat({ name: element.name, seat }, element)
                  }
                  className={styles.button}
                  active
                  key={seat.id}
                >
                  {seat.id}
                </Button>
              );
            } else {
              return (
                <div key={seat.id} className={styles.emptyContainer}></div>
              );
            }
          })}
        </div>
      ))}
    </Container>
  );
}

export default Bus;
