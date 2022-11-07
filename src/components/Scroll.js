// src/components/Scroll.js

import React from 'react';

const Scroll = (props) => {
  return( 
    <div className='spots-container' style={{overflowY: 'scroll', height:'70vh'}}>
      {props.children}
    </div>	
  );
}

export default Scroll;