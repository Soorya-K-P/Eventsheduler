import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchEvents, deleteEvent } from '../Api/api';
import { useParams } from 'react-router-dom';

function EventList({ fetch }) {
  const { id } = useParams();
  const [events, setEvents] = useState([]);

  // Fetch data from the backend when the component mounts
  useEffect(() => {
    fetchEvents()
      .then((response) => setEvents(response.data))
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  if (fetch) {
    fetchEvents()
      .then((response) => setEvents(response.data))
      .catch((error) => console.error('Error fetching events:', error));
  }

  const handleDelete = (id) => {
    deleteEvent(id)
      .then(() => {
        setEvents((prevEvents) => prevEvents.filter((event) => event._id !== id));
      });
  };

  return (
    <div>
      <h2 style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'flex-start' }}>Event List</h2>

      <Table striped="columns" className="main">
        <thead>
          <tr>
            <th style={{ border: '1px solid', backgroundColor: 'blue', color: 'white', textAlign: 'left' }}>Title</th>
            <th style={{ border: '1px solid', backgroundColor: 'blue', color: 'white', textAlign: 'left' }}>Date</th>
            <th style={{ border: '1px solid', backgroundColor: 'blue', color: 'white', textAlign: 'left' }}>Location</th>
            <th style={{ border: '1px solid', backgroundColor: 'blue', color: 'white', textAlign: 'left' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event._id}>
              <td>{event.title}</td>
              <td>{new Date(event.date).toLocaleDateString()}</td>
              <td>{event.location}</td>

              <td>
                <button className="btn btn-primary" style={{ marginRight: '10px' }}>
                  <a href={`/view/${event._id}`} style={{ textDecoration: 'none', color: 'white' }}>
                    View
                  </a>
                </button>
                <button className="btn btn-primary" style={{ marginRight: '10px' }}>
                  <a href={`/EditEvent/${event._id}`} style={{ textDecoration: 'none', color: 'white' }}>
                    Edit
                  </a>
                </button>
                <button type="button" onClick={() => handleDelete(event._id)} className="btn btn-primary">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default EventList;
