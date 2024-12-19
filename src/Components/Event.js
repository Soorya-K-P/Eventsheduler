import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';

function Event() {
  const [events, setEvents] = useState([]);


  return (
    <div>
<Navbar bg="primary" data-bs-theme="dark" expand="lg" style={{ paddingLeft: '0px', paddingRight: '20px' }}>
  <Container fluid>
    <Navbar.Brand href="#home" style={{ marginLeft: '30px', fontWeight: 'bold', fontSize: '1.25rem' }}>
      Event Scheduler
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-nav" />
    <Navbar.Collapse id="navbar-nav">
      <Nav className="ms-auto" style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Nav.Link href="#home" style={{ margin: '0 15px', fontSize: '1rem',color:'white' }}>Home</Nav.Link>
        <Nav.Link href="#features" style={{ margin: '0 15px', fontSize: '1rem',color:'white' }}>Events</Nav.Link>
        <Nav.Link href="#sessions" style={{ margin: '0 15px', fontSize: '1rem',color:'white' }}>Sessions</Nav.Link>
        <Nav.Link href="#speakers" style={{ margin: '0 15px', fontSize: '1rem',color:'white' }}>Speakers</Nav.Link>
        <Nav.Link href="#schedule" style={{ margin: '0 15px', fontSize: '1rem',color:'white' }}>Schedule</Nav.Link>
        <Nav.Link href="#logout" style={{ margin: '0 15px', fontSize: '1rem',color:'white' }}>Logout</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    </div>
  )
}

export default Event;
