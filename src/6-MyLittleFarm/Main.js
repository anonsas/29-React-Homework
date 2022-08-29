import React, { useState, useEffect } from 'react';
import './Main.scss';
import Ganykla from './Ganykla';
import rand from '../utils/rand';

const idGenerator = () => {
  return [...Array(7)]
    .fill()
    .map((_) => rand(0, 9))
    .join('');
};

const loadAnimals = () => {
  return {
    karves: [...Array(rand(5, 20))].fill().map((_) => 'K' + idGenerator()),
    avys: [...Array(rand(5, 20))].fill().map((_) => 'A' + idGenerator()),
  };
};

//===========================================
function Main() {
  const [animals, setAnimals] = useState({});
  const [updatedAnimals, setUpdatedAnimals] = useState(
    localStorage.getItem('animals') || []
  );

  useEffect(() => {
    localStorage.setItem('animals', JSON.stringify(animals));
    setUpdatedAnimals(JSON.parse(localStorage.getItem('animals')));
  }, [animals]);

  return (
    <div className="farm">
      <h1>My Little Farm</h1>
      <button onClick={() => setAnimals(loadAnimals)}>I ganykla</button>
      <Ganykla animals={updatedAnimals} setAnimals={setAnimals} />
    </div>
  );
}

export default Main;
