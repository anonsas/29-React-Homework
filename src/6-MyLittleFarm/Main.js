import React, { useState, useEffect } from 'react';
import './Main.scss';
import Field from './Field';
import rand from '../utils/rand';

function Main() {
  const [animals, setAnimals] = useState(null);

  const idGenerator = () => {
    return [...Array(7)]
      .fill()
      .map((_) => rand(0, 9))
      .join('');
  };

  const loadAnimals = () =>
    setAnimals({
      cows: [...Array(rand(5, 20))].fill().map((_) => 'K' + idGenerator()),
      sheeps: [...Array(rand(5, 20))].fill().map((_) => 'A' + idGenerator()),
    });

  useEffect(() => {
    if (animals === null) {
      const anims = localStorage.getItem('animalsList');
      anims === null ? setAnimals([]) : setAnimals(JSON.parse(anims));
    } else {
      localStorage.setItem('animalsList', JSON.stringify(animals));
    }
  }, [animals]);

  return (
    <div className="farm">
      <h1>My Little Farm</h1>
      <button onClick={loadAnimals}>To Field</button>
      <Field animals={animals} setAnimals={setAnimals} />
    </div>
  );
}

export default Main;
