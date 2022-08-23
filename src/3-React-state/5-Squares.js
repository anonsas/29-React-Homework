import React, { useState } from 'react';

function Squares() {
  const [squares, setSquares] = useState([]);

  const addRedSquare = () => setSquares((prevState) => [...prevState, 'red']);
  const addBlueSquare = () => setSquares((prevState) => [...prevState, 'blue']);
  const resetHandler = () => setSquares([]);

  return (
    <div className="container">
      <div className="actions">
        <button onClick={addRedSquare} className="red-btn">
          add red
        </button>
        <button onClick={addBlueSquare}>add blue</button>
        <button onClick={resetHandler}>reset</button>
      </div>

      <div className="squares-container">
        {squares.map((square) => (
          <div className={`square ${square === 'red' && 'red-square'}`}>square</div>
        ))}
      </div>
    </div>
  );
}

export default Squares;
