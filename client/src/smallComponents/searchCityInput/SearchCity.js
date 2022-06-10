import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Container, Row, Col } from 'react-bootstrap';
import SeatsModal from '../DeparturesModal/DeparturesModal';
import styles from './styles.module.scss';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useDispatch } from 'react-redux';
import {
  clearDeparturesData,
  fetchDeparturesData,
} from './../../features/departuresSlice';
const options = [
  'Wroclaw',
  'Warszawa',
  'Gdansk',
  'Torun',
  'Lodz',
  'Gdynia',
  'Poznan',
  'Szczecin',
];

function SearchCity(props) {
  const getNewDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const withSlashes = [year, month, day].join('/');

    return withSlashes;
  };

  const dispatch = useDispatch();

  const [modalShow, setModalShow] = React.useState(false);
  const [valueFrom, setValueFrom] = useState('Wroclaw');
  const [valueTo, setValueTo] = useState('Warszawa');
  const [inputValueFrom, setInputValueFrom] = useState('');
  const [inputValueTo, setInputValueTo] = useState('');
  const [date, setDate] = useState(getNewDate(new Date()));

  const handleOrderButton = async () => {
    await dispatch(fetchDeparturesData({ valueFrom, valueTo, date })).then(
      setModalShow(true)
    );
  };

  return (
    <Container fluid align='center'>
      <br />
      <Row className='justify-content-center'>
        <Col md={12} lg={4}>
          <Autocomplete
            value={valueFrom}
            onChange={(event, newValue) => {
              setValueFrom(newValue);
            }}
            inputValue={inputValueFrom}
            onInputChange={(event, newInputValueFrom) => {
              setInputValueFrom(newInputValueFrom);
              dispatch(clearDeparturesData());
            }}
            id='from'
            options={options}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label='From' />}
            className={styles.autoComplete}
          />
        </Col>
        <Col md={12} lg={4}>
          <Autocomplete
            value={valueTo}
            onChange={(event, newValue) => {
              setValueTo(newValue);
            }}
            inputValue={inputValueTo}
            onInputChange={(event, newInputValueTo) => {
              setInputValueTo(newInputValueTo);
              dispatch(clearDeparturesData());
            }}
            id='to'
            options={options}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label='To' />}
            className={styles.autoComplete}
          />
        </Col>
        <Col md={12} lg={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div className={styles.autoComplete}>
              <DatePicker
                renderInput={(props) => <TextField {...props} />}
                label='Pick departure date'
                value={date}
                onChange={(newValue) => {
                  dispatch(clearDeparturesData());
                  const newDate = getNewDate(newValue);
                  setDate(newDate);
                }}
              />
            </div>
          </LocalizationProvider>
        </Col>
      </Row>
      <Container
        fluid
        align='center'
        className=' align-items-center justify-content-center'
      >
        <div className='py-5'>
          <span className={styles.button} onClick={() => handleOrderButton()}>
            <p></p>
          </span>
        </div>

        <SeatsModal show={modalShow} onHide={() => setModalShow(false)} />
      </Container>
    </Container>
  );
}

export default SearchCity;
