import React from 'react';
import { Button, Container } from 'react-bootstrap';
import styles from './styles.module.scss';

function Bus(props) {
  return (
    <Container fluid className={styles.seatsRow} align='center'>
      <div className={styles.seatColumn}>
        <p className={styles.colName}>A</p>
        <Button className={styles.button}>1</Button>
        <Button className={styles.button}>2</Button>
        <div className={styles.emptyContainer}></div>
        <Button className={styles.button}>3</Button>
        <Button className={styles.button}>4</Button>
      </div>
      <div className={styles.seatColumn}>
        <p className={styles.colName}>B</p>
        <Button className={styles.button}>1</Button>
        <Button className={styles.button}>2</Button>
        <div className={styles.emptyContainer}></div>
        <Button className={styles.button}>3</Button>
        <Button className={styles.button}>4</Button>
      </div>
      <div className={styles.seatColumn}>
        <p className={styles.colName}>C</p>
        <Button className={styles.button}>1</Button>
        <Button className={styles.button}>2</Button>
        <div className={styles.emptyContainer}></div>
        <Button className={styles.button}>3</Button>
        <Button className={styles.button}>4</Button>
      </div>
      <div className={styles.seatColumn}>
        <p className={styles.colName}>D</p>
        <Button className={styles.button}>1</Button>
        <Button className={styles.button}>2</Button>
        <div className={styles.emptyContainer}></div>
        <Button className={styles.button}>3</Button>
        <Button className={styles.button}>4</Button>
      </div>
      <div className={styles.seatColumn}>
        <p className={styles.colName}>E</p>
        <Button className={styles.button}>1</Button>
        <Button className={styles.button}>2</Button>
        <div className={styles.emptyContainer}></div>
        <Button className={styles.button}>3</Button>
        <Button className={styles.button}>4</Button>
      </div>
      <div className={styles.seatColumn}>
        <p className={styles.colName}>F</p>
        <Button className={styles.button}>1</Button>
        <Button className={styles.button}>2</Button>
        <div className={styles.emptyContainer}></div>
        <Button className={styles.button}>3</Button>
        <Button className={styles.button}>4</Button>
      </div>
      <div className={styles.seatColumn}>
        <p className={styles.colName}>G</p>
        <Button className={styles.button}>1</Button>
        <Button className={styles.button}>2</Button>
        <div className={styles.emptyContainer}></div>
        <Button className={styles.button}>3</Button>
        <Button className={styles.button}>4</Button>
      </div>
      <div className={styles.seatColumn}>
        <p className={styles.colName}>H</p>
        <Button className={styles.button}>1</Button>
        <Button className={styles.button}>2</Button>
        <div className={styles.emptyContainer}></div>
        <Button className={styles.button}>3</Button>
        <Button className={styles.button}>4</Button>
      </div>
      <div className={styles.seatColumn}>
        <p className={styles.colName}>I</p>
        <Button className={styles.button}>1</Button>
        <Button className={styles.button}>2</Button>
        <div className={styles.emptyContainer}></div>
        <Button className={styles.button}>3</Button>
        <Button className={styles.button}>4</Button>
      </div>
      <div className={styles.seatColumn}>
        <p className={styles.colName}>J</p>
        <Button className={styles.button}>1</Button>
        <Button className={styles.button}>2</Button>
        <Button className={styles.button}>3</Button>
        <Button className={styles.button}>4</Button>
        <Button className={styles.button}>5</Button>
      </div>
    </Container>
  );
}

export default Bus;
