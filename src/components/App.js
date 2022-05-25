import React, { useEffect, useState } from 'react';
import DoggoMenu from "./DoggoMenu";
import DoggoInfo from './DoggoInfo';

function App() {
  const [doggos, setDoggos] = useState([])
  const [selectedDog, setSelectedDog] = useState({})


  useEffect(() => {
    fetch("http://localhost:3001/pups")
    .then(response => response.json())
    .then(data => {
      setSelectedDog(data[0])
      setDoggos(data)
    })
}, [])

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <div id="dog-bar">
        <DoggoMenu dogs={doggos} onDogClick={setSelectedDog} />
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
        <DoggoInfo dog={selectedDog} />
        </div>
      </div>
    </div>
  );
}

export default App;
