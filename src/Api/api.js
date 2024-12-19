import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3000' }); // Backend base URL

// Functions to communicate with the backend
export const fetchEvents = () => API.get('/events');   
         // Get all events
export const createEvent = (eventData) => API.post('/events', eventData); // Add an event

export const createSession = (sessionData) => API.post('/sessions',sessionData)

export const fetchEventById = (eventId) => API.get(`/events/${eventId}`)

export const fetchsession = () => API.get('/sessions')

export const deleteEvent = (eventId) => API.post(`/events/${eventId}`);

export const updateEvent = (eventId, eventData) => API.post(`/events/update/${eventId}`, eventData);

export const fetchsessionByEventId = (eventId) => API.get(`/sessions/session/${eventId}`);

export const deleteSession = (sessionId) => API.post(`/sessions/${sessionId}`)

export const updatesession = (sessionId, sessionData) => API.post(`/sessions/update/${sessionId}`,sessionData)

