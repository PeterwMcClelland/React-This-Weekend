// src/components/Card.js

import React from 'react';

function Card({person}) {
  return(
    <div className="spots-container">
      <img className="spot-img" alt={person.name} src={process.env.PUBLIC_URL + person.imgPath} />
      <div>
        <h2>{person.name}</h2>
        <p>{person.details}</p>
        <p>{person.address}</p>
      </div>
    </div>
  );
}

export default Card;