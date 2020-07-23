import React from 'react';
import BorderTop from './BorderTop';
import ChoiceBrand from './ChoiceBrand'
import bg from '../images/bg.jpg';
import './HomePage.css';

function HomePage() {
    return (
        <>
        <div className="HomePage">
          <BorderTop />
        </div>
        <div >
          <img src={bg} alt="phoneBreack" className="PhoneBreack" />
        </div> 
        <ChoiceBrand />         
              
        </>      
    );
  }
  
  export default HomePage;