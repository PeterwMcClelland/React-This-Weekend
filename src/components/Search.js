// src/components/Search.js

import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';

function Search({ details }) {

  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false); 

  const filteredPersons = details.filter(
    person => {
      return (
        person
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase()) 
        // person
        // .email
        // .toLowerCase()
        // .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
    if(e.target.value===""){
      setSearchShow(false);
    }
    else {
      setSearchShow(true);
    }
  };

  function searchList() {
    if (searchShow) {
      return (
        <Scroll>
          <SearchList filteredPersons={filteredPersons} />
        </Scroll>
      );
    }
  }

  return (
    <section className="garamond">
      <div className="navy georgia ma0 grow">
        <h2 className="f2">Search Spot</h2>
      </div>
      <div className="pa2">
        <input className="searchbar" type = "search" placeholder = "Ledge, Rail, Manual, Skate Park..." onChange = {handleChange}/>
      </div>
      {searchList()}
    </section>
  );
}

export default Search;