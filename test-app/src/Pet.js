import React from 'react';

function Pet(props) {
  function handleDelete() {
    props.setPets(prev => prev.filter(pet => pet.id !== props.id))
  }
  
  return (
    <li>{props.name} is a {props.species} and is {props.age} years old.
      <button onClick={handleDelete}>Delete</button>
    </li>
  )
}

export default Pet