import React from 'react';

function Ganykla({ animals: { karves, avys }, setAnimals }) {
  const eikPasAvis = (name) => {
    const item = karves.find((k) => k === name);
    setAnimals((prevState) => ({
      ...prevState,
      avys: [...prevState.avys, item],
      karves: [...prevState.karves].filter((k) => k !== item),
    }));
  };

  const eikPasKarves = (name) => {
    const item = avys.find((a) => a === name);
    setAnimals((prevState) => ({
      ...prevState,
      karves: [...prevState.karves, item],
      avys: [...prevState.avys].filter((a) => a !== item),
    }));
  };

  return (
    <div className="animals">
      <div>
        <h3>Karves</h3>
        <div className="figure-container">
          {karves?.map((karve, i) => (
            <p key={i} className="figure" onClick={() => eikPasAvis(karve)}>
              {karve}
            </p>
          ))}
        </div>
      </div>
      <div>
        <h3>Avys</h3>
        <div className="figure-container">
          {avys?.map((avis, i) => (
            <p key={i} className="figure circle" onClick={() => eikPasKarves(avis)}>
              {avis}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ganykla;
