import React from 'react'
import Table from 'react-bootstrap/Table';

function Page5() {
  return (
    <div>
        <h2 style={{fontWeight:'bold',display:'flex',justifyContent:'flex-start'}}>View Speakers</h2>

<Table striped="columns" className='main'>
      <thead>
        <tr >
          
          <th style={{border:'1px solid',backgroundColor:'blue ',color:'white',textAlign:"left"}}>Title</th>
          <th style={{border:'1px solid',backgroundColor:'blue ',color:'white',textAlign:"left"}}>Date</th>
          <th style={{border:'1px solid',backgroundColor:'blue ',color:'white',textAlign:"left"}}>Location</th>
          <th style={{border:'1px solid',backgroundColor:'blue ',color:'white',textAlign:"left"}}>Actions</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>
            <button>View</button>
          <button>Edit</button>
          <button>Delete</button>
          </td>
        </tr>
        <tr>
          
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default Page5