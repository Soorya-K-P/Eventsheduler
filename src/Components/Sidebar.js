import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Sidebar() {
  return (
    <div><div className="d-flex" style={{ height: '92vh', padding: '8px' }}>
      {/* Sidebar */}
      <div className="sidebar bg-primary text-white" style={{ borderRadius: '5px' }}>

        <Nav className="flex-column mt-4" >
          <Nav.Link href="/" className="text-white px-3">Create Event</Nav.Link>
          <Nav.Link href="/eventlist" className="text-white px-3">View Events</Nav.Link>
          <Nav.Link href="/page2" className="text-white px-3">Create Session</Nav.Link>
          <Nav.Link href="/viewsessions" className="text-white px-3">View Sessions</Nav.Link>
          {/* <Nav.Link href="/page3" className="text-white px-3">Create Speaker</Nav.Link>
          <Nav.Link href="/viewspeakers" className="text-white px-3">View Speakers</Nav.Link> */}
          {/* <Nav.Link href="#Logout" className="text-white px-3">Optimized Shedule</Nav.Link> */}
        </Nav>
      </div>
    </div></div>
  )
}

export default Sidebar