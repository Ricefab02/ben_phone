import React, { useState, useEffect } from 'react';
import BorderTop from './BorderTop'
import Axios from 'axios';
import {
  Link, useParams,
} from 'react-router-dom';
import './Brand.css';

function Brand({ dispatch, ...props }) {
  const { brandId } = useParams();
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:8000/brands/${brandId}/phones`)
      .then(function (response) {
        // handle success
        setPhones(response.data);
      })
  }, []);

  return (
    <>
      <Link to='/home'>
        <BorderTop />
      </Link>

      {phones.map((phone) => (
        <div className= "Button">
        <Link to={`/phones/${phone.id}/repairs`} >
          <button>{phone.name}</button>
        </Link>
        </div>
      ))}
    </>

  );
}

export default Brand;