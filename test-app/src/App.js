import React, { useState, useEffect } from 'react';
import Header from './Header'
import LikeArea from './LikeArea'
import TimeArea from './TimeArea'
import Pet from './Pet'
import PetForm from './PetForm'
import Footer from './Footer.js'

function App() {
  const [pets, setPets] = useState([])
  
  // only run once the first time this component is rendered
  useEffect(() => {
    if (localStorage.getItem("examplePetData")) {
      setPets(JSON.parse(localStorage.getItem("examplePetData")))
    }
  }, [])
  
  // run every time our pet state changes
  useEffect(() => {
    localStorage.setItem("examplePetData", JSON.stringify(pets))
  }, [pets])

  return (
    <>
      <Header />
      <LikeArea />
      <TimeArea />
      <PetForm setPets={setPets} />
      <ul>
        {pets.map(pet => <Pet setPets={setPets} id={pet.id} name={pet.name} species={pet.species} age={pet.age} key={pet.id} />)}
      </ul>
      <Footer />
    </>
  );
}

export default App;
