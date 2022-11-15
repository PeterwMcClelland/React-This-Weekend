// src/components/Card.js

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'


const pin = <FontAwesomeIcon icon={faLocationDot} />

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
        <p>{pin} {person.address}</p>
      </div>
      </div>
    </div>
  );
}

export default Card;