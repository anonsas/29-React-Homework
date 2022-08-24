import React, { useState } from 'react';

function Squares() {
  const [squares, setSquares] = useState([]);

  const addRedSquare = () => {
    setSquares((prevState) => [...prevState, { color: 'red' }]);
  };

  const addBlueSquare = () => {
    setSquares((prevState) => [...prevState, { color: 'blue' }]);
  };

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
        {squares.map((square, i) => (
          <div key={i} className={`square ${square.color === 'red' && 'red-square'}`}>
            {square.color}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Squares;
