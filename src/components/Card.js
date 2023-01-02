// src/components/Card.js

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faMapLocationDot } from '@fortawesome/free-solid-svg-icons'


const pin = <FontAwesomeIcon icon={faMapLocationDot} className='pinicon' />
const copyPin = <FontAwesomeIcon icon={faCopy} />


function Card({person}) {
  return(
    <div className="spots-container">
      
      <div className='column2'>
      <img className="spot-img" alt={person.name} src={process.env.PUBLIC_URL + person.imgPath} />
      </div>
      <div className='column1'>
      <div className='card-text'>
      

        <h2>{person.name}</h2>
        <p>{person.info}</p>
        <p className='textarea'>{pin} {person.address} </p>

        <div className='copypin' onClick={() => {
          navigator.clipboard.writeText(person.address);
        }}>
         {copyPin}
      </div>
      </div>
      </div>
    </div>
  
  );
}

export default Card;