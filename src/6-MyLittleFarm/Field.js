import React from 'react';

function Field({ animals, setAnimals }) {
  const goToSheeps = (selectedCow) => {
    setAnimals((prevState) => ({
      ...prevState,
      sheeps: [...prevState.sheeps, selectedCow],
      cows: [...prevState.cows].filter((cow) => cow !== selectedCow),
    }));
  };

  const goToCows = (selectedSheep) => {
    setAnimals((prevState) => ({
      ...prevState,
      cows: [...prevState.cows, selectedSheep],
      sheeps: [...prevState.sheeps].filter((sheep) => sheep !== selectedSheep),
    }));
  };

  return (
    <div className="animals">
      <div>
        <h3>Cows</h3>
        <div className="figure-container">
          {animals?.cows?.map((cow) => (
            <p key={cow} className="figure" onClick={() => goToSheeps(cow)}>
              {cow}
            </p>
          ))}
        </div>
      </div>
      <div>
        <h3>Sheeps</h3>
        <div className="figure-container">
          {animals?.sheeps?.map((sheep) => (
            <p key={sheep} className="figure circle" onClick={() => goToCows(sheep)}>
              {sheep}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Field;
