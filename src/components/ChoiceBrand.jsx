import React, { useEffect, useState } from 'react';
import './ChoiceBrand.css';
import {
  Link,
} from 'react-router-dom';
import Axios from 'axios';



function ChoiceBrand() {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    Axios.get('http://localhost:8000/brands')
      .then((response) => {
        setBrands(response.data);
      });
  }, [])
  return (
    
    <div className="ChoiceBrand">
      
      {brands.map((brand) => (
        
        <Link to={`/brands/${brand.id}/phones`}>
          <button color="secondary">{brand.name}</button>
        </Link>        
         
      ))}
      
    </div>
  
  );
}

export default ChoiceBrand;