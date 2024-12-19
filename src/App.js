import './App.css';
import Event from './Components/Event';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import EventForm from './Components/EventForm';
// import Home from './Components/Home';
import { Col, Container, Row } from 'react-bootstrap';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';
import EventList from './Components/EventList'
import Page4 from './Components/Page4';
import Page5 from './Components/Page5';
import { useState } from 'react';
import SessionForm from './Components/SessionForm';
import View from './Components/View';
import EditEvent from './Components/EditEvent';
import ManageSession from './Components/ManageSession';
import EditSession from './Components/EditSession';

function App() {

  const [fetch,setFetch] = useState(false)
  console.log(fetch);
  
  return (
    <div className="App">

<Container fluid>
        <Row>
          <Event />
        </Row>
        <Row>
          <Col xs={2}>
            <Sidebar />
          </Col>
          <Col xs={9}>
            <BrowserRouter>
              <Routes>
                <Route
                  path="/"
                  element={
                    <div>
                      <EventList fetch={fetch} />
                      <EventForm setFetch={setFetch} />
                    </div>
                  }
                />
                <Route path="/Page2" element={<Page2 />} />
                <Route path="/Page3" element={<Page3 />} />
                <Route path='/eventlist' element={<EventList />}/>
                <Route path='/viewsessions' element={<Page4 />}/>
                <Route path='/viewspeakers' element={<Page5 />}/>
                <Route path='/sessionform/:id' element={<SessionForm />}/>
                <Route path='/view/:id' element={<View/>}/>
                <Route path='/EditEvent/:id' element={<EditEvent />} />
                <Route path='/managesession/:id' element={<ManageSession />} />
                <Route path='/EditSession/:id' element={<EditSession />} />


              </Routes>
            </BrowserRouter>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
