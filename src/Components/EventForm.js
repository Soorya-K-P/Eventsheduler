import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { createEvent, fetchEvents } from '../Api/api';

const EventForm = ({setFetch}) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await createEvent(formData);
      setFetch(true)
      alert('Event created successfully')
      setFormData({ title: '', description: '', date: '', location: ''})

    } catch (error){
    console.log('Error creating event:', error);
    // Here, you can add logic to handle the form data (e.g., sending it to a server).
    alert('Failed to create event. Please try again')
    
    }
  };

  return (
    <Container className="mt-5">
      <h2 style={{fontWeight:'bold',textAlign:"left"}}>Create/Edit Event</h2>
      <Form onSubmit={handleSubmit} style={{textAlign:"left"}}>
        <Form.Group controlId="title">
          <Form.Label>Title:</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter event title" 
            name="title" 
            value={formData.title} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        <Form.Group controlId="description" className="mt-3">
          <Form.Label>Description:</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            placeholder="Enter event description" 
            name="description" 
            value={formData.description} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        <Form.Group controlId="date" className="mt-3">
          <Form.Label>Date:</Form.Label>
          <Form.Control 
            type="date" 
            name="date" 
            value={formData.date} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        <Form.Group controlId="location" className="mt-3">
          <Form.Label>Location:</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter event location" 
            name="location" 
            value={formData.location} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-4" style={{marginRight:"5px"}}>
          Save
        </Button>

        <Button variant="secondary" type="submit" className="mt-4">
          Cancel
        </Button>

      </Form>
    </Container>
  );
};

export default EventForm;
