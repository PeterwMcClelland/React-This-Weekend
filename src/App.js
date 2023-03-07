// src/App.js

import React from 'react';
import Search from './components/Search';
import initialDetails from './data/initialDetails';



function App() {
  return (
    <div className="body">
      <Search details={initialDetails}/>
    </div>
  );
}

export default App;
