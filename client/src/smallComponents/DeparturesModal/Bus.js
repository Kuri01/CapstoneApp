import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import styles from './styles.module.scss';

function Bus(props) {
  const [picked, setPicked] = useState('');

  const handlePickSeat = (event) => {
    if (picked === '') {
      setPicked(event.target.value);
    } else {
      setPicked('');
    }
  };

  const mockBus = {
    doubleSeats: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'],
    lastRow: 'j',
  };

  return (
    <Container fluid className={styles.seatsRow} align='center'>
      {mockBus.doubleSeats.map((element) => (
        <div className={styles.seatColumn} key={element}>
          <p className={styles.colName}>{element.toUpperCase()}</p>
          <Button
            variant='danger'
            disabled={picked !== '' && picked !== `${element}1` ? true : false}
            onClick={handlePickSeat}
            value={`${element}1`}
            className={styles.button}
            active
          >
            1
          </Button>
          <Button
            variant='danger'
            disabled={picked !== '' && picked !== `${element}2` ? true : false}
            onClick={handlePickSeat}
            value={`${element}2`}
            className={styles.button}
          >
            2
          </Button>
          <div className={styles.emptyContainer}></div>
          <Button
            variant='danger'
            disabled={picked !== '' && picked !== `${element}3` ? true : false}
            onClick={handlePickSeat}
            value={`${element}3`}
            className={styles.button}
          >
            3
          </Button>
          <Button
            variant='danger'
            disabled={picked !== '' && picked !== `${element}4` ? true : false}
            onClick={handlePickSeat}
            value={`${element}4`}
            className={styles.button}
          >
            4
          </Button>
        </div>
      ))}

      <div className={styles.seatColumn}>
        <p className={styles.colName}>{mockBus.lastRow.toUpperCase()}</p>
        <Button
          variant='danger'
          disabled={
            picked !== '' && picked !== `${mockBus.lastRow}1` ? true : false
          }
          onClick={handlePickSeat}
          value={`${mockBus.lastRow}1`}
          className={styles.button}
        >
          1
        </Button>
        <Button
          variant='danger'
          disabled={
            picked !== '' && picked !== `${mockBus.lastRow}2` ? true : false
          }
          onClick={handlePickSeat}
          value={`${mockBus.lastRow}2`}
          className={styles.button}
        >
          2
        </Button>
        <Button
          variant='danger'
          disabled={
            picked !== '' && picked !== `${mockBus.lastRow}3` ? true : false
          }
          onClick={handlePickSeat}
          value={`${mockBus.lastRow}3`}
          className={styles.button}
        >
          3
        </Button>
        <Button
          variant='danger'
          disabled={
            picked !== '' && picked !== `${mockBus.lastRow}4` ? true : false
          }
          onClick={handlePickSeat}
          value={`${mockBus.lastRow}4`}
          className={styles.button}
        >
          4
        </Button>
        <Button
          variant='danger'
          disabled={
            picked !== '' && picked !== `${mockBus.lastRow}5` ? true : false
          }
          onClick={handlePickSeat}
          value={`${mockBus.lastRow}5`}
          className={styles.button}
        >
          5
        </Button>
      </div>
    </Container>
  );
}

export default Bus;
