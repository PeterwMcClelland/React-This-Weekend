import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Search() {
    
    return (
        <>
        <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Search</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
        </>
    );
}

export default Search;