import { Tab, Tabs, Container, Stack } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import DepartureCard from '../smallComponents/DepartureCard/DepartureCard';
import TicketCard from '../../smallComponents/TicketCard/TicketCard';

function ProfileTabs() {
  const [key, setKey] = useState('home');

  const tickets = useSelector((state) => state.user.userTickets);
  console.log(tickets);

  return (
    <Tabs
      id='controlled-tab-example'
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className='mb-3 my-3 mx-3'
      style={{ flexDirection: 'row' }}
    >
      <Tab
        eventKey='home'
        title={<p className='mx-3 px-3 py-0 my-0'>Tickets</p>}
        className='px-4 mx-4'
      >
        <Container fluid className='mx-0 px-0'>
          {tickets.map((ticket) => (
            <TicketCard key={ticket.id} data={ticket} />
          ))}
        </Container>
      </Tab>
      <Tab
        eventKey='profile'
        title={<p className='mx-3 px-3 py-0 my-0'>Historical tickets</p>}
        className='px-4 mx-4'
      >
        <Container fluid className='mx-0 px-0'>
          <p>dasdsadsasdsasddasasd</p>
        </Container>
      </Tab>
      <Tab
        eventKey='contact'
        disabled
        title={<p className='mx-3 px-3 py-0 my-0'>Manage profile</p>}
        className='px-4 mx-4'
      >
        <Container>
          <p>dasdsadsasdsasddasasd</p>
        </Container>
      </Tab>
    </Tabs>
  );
}

export default ProfileTabs;
