import React, { useState } from 'react';

function Kvadratai() {
  const [squares, setSquares] = useState(0);

  const addSquares = () => setSquares((prevState) => prevState + 1);
  const resetSquares = () => setSquares(0);

  return (
    <div className="container">
      <div className="actions">
        <button onClick={addSquares}>Lets click some squares: {squares}</button>
        <button onClick={resetSquares}>Reset squares</button>
      </div>

      <div className="squares-container">
        {[...Array(squares)].map((_) => (
          <div className="square">square</div>
        ))}
      </div>
    </div>
  );
}

export default Kvadratai;
