import React, { useState, useEffect } from 'react';
import BorderTop from './BorderTop'
import Axios from 'axios';
import {
  Link, useParams,
} from 'react-router-dom';
import { Table } from 'reactstrap';

function Phone({ dispatch, ...props }) {
  const { phoneId } = useParams();
  const [repairs, setRepairs] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:8000/phones/${phoneId}/repairs`)
      .then(function (response) {
        // handle success
        setRepairs(response.data);
      })
  }, []);

  return (
    <>
      <Link to={`/brands/1/phones`}>
        <BorderTop />
      </Link>

      
        <div> 
        <Table dark>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prix</th>
              <th>Temps</th>
            </tr>
          </thead>
          {repairs.map((repair) => (
          <tbody>
            <tr>
              <th scope="row">{repair.name}</th>
              <td>{repair.price}</td>
              <td>{repair.time}</td>
            </tr>         
          </tbody>))}
        </Table>
           
         </div>
         
    </>
 
  );
}

export default Phone;