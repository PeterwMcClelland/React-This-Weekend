
import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';






function Search({ details }) {

  const [searchField, setSearchField] = useState("");
  
  

  const filteredPersons = details.filter(
    person => {
      return (
        person
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase()) 
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
      <Scroll>
        <SearchList filteredPersons={filteredPersons} />
      </Scroll>
    );
  }

  return (
    
    <section className="garamond">
      <div className="navy georgia ma0 grow">
        <h2 className="f2">This Weekend</h2>
        
      </div>

      

      <div className="">
        <input 
          className="search-bar"
          type = "search" 
          placeholder = "Ledges, Stairs, Skate Park..."
          onChange = {handleChange}
        />

{/* <div className="dropdown">
  <button className="dropbtn">City</button>
  <div className="dropdown-content">
    <a href="#Portland">Portland, OR</a>
    <a href="#Austin">Austin, TX</a>
    <a href="#LA">Los Angeles, CA</a>
  </div>
  </div> */}
      </div>

      
      
      {searchList()}
    </section>
  );
}

export default Search;