import React from 'react';

function Ganykla({ animals }) {
  return (
    <div className="animals">
      <div>
        <h3>Karves</h3>
        <div className="figure-container">
          {animals.karves?.map((karve, id) => (
            <p key={id} className="figure">
              {karve}
            </p>
          ))}
        </div>
      </div>
      <div>
        <h3>Avys</h3>
        <div className="figure-container">
          {animals.avys?.map((avis, id) => (
            <p key={id} className="figure circle">
              {avis}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ganykla;
