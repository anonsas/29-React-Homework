import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import Kvadratas from './Kvadratas';
import Apskritimas from './Apskritimas';
import Skaicius from './Skaicius';

function Main() {
  const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];
  const sortedDogs = dogs.sort((a, b) => a.localeCompare(b));
  const firstIsLowerCase = dogs.filter((dog) => dog[0].toLowerCase() === dog[0]);

  return (
    <>
      <div className="dogs-container">
        {dogs.map((dog) => (
          <Kvadratas key={uuidv4()} dog={dog} />
        ))}
      </div>

      <div className="dogs-container">
        {sortedDogs.map((dog) => (
          <Apskritimas key={uuidv4()} dog={dog} />
        ))}
      </div>

      <div className="dogs-container">
        {dogs.map((dog, i) =>
          i % 2 === 0 ? (
            <Kvadratas key={uuidv4()} dog={dog} />
          ) : (
            <Apskritimas key={uuidv4()} dog={dog} />
          )
        )}
      </div>

      <div className="dogs-container">
        {firstIsLowerCase.map((dog) => (
          <Apskritimas key={uuidv4()} dog={dog} />
        ))}
      </div>

      <div className="dogs-container">
        {dogs.map((dog) => (
          <Skaicius key={uuidv4()} dog={dog} ilgis={dog.length} />
        ))}
      </div>
    </>
  );
}

export default Main;
