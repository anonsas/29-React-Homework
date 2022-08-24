import React, { useState } from 'react';

function Kvadratai() {
  const [squares, setSquares] = useState([]);

  const addSquares = () => setSquares((prevState) => [...prevState, '']);
  const resetSquares = () => setSquares([]);

  return (
    <div className="container">
      <div className="actions">
        <button onClick={addSquares}>Lets click some squares: {squares}</button>
        <button onClick={resetSquares}>Reset squares</button>
      </div>

      <div className="squares-container">
        {squares?.map((_, i) => (
          <div key={i} className="square">
            square - {++i}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Kvadratai;
