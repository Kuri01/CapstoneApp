import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import SearchCity from '../smallComponents/searchCityInput/SearchCity';
import styles from './styles.module.scss';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import { useDispatch } from 'react-redux';
import { fetchDeparturesData } from '../features/departuresSlice';

function MainContainer(props) {
  useEffect(() => {
    addResponseMessage('Welcome to this **awesome** chat!');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };

  return (
    <div>
      <div className={styles.mainDiv} id='section1'>
        <Container>
          <p>Order your bus even today!</p>
          <SearchCity />
        </Container>
      </div>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title='My new awesome title'
        subtitle='And my cool subtitle'
        toggleWidget={false}
      />
      <div id='section2'></div>
    </div>
  );
}

export default MainContainer;
