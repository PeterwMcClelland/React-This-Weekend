// src/components/Scroll.js

import React from 'react';

const Scroll = (props) => {
  return( 
    <div className='scroll' >
      {props.children}
    </div>	
  );
}

export default Scroll;