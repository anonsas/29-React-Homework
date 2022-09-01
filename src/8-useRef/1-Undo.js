import React, { useState } from 'react';
import rand from '../utils/rand';

function Undo() {
  const [squares, setSquares] = useState({
    square: rand(5, 10),
    allSquares: [],
  });

  const addSquaresHandler = () => {
    setSquares((prevState) => ({
      square: rand(5, 10),
      allSquares: [...prevState.allSquares, prevState.square],
    }));
  };

  const undoSquaresHandler = () => {
    const newSquares = { ...squares };
    newSquares.allSquares.splice(newSquares.allSquares.length - 1, 1);
    setSquares(newSquares);
  };

  const resetSquaresHandler = () => {
    setSquares({
      square: rand(5, 10),
      allSquares: [],
    });
  };

  return (
    <div className="main">
      <div className="cat-form">
        <button type="button" onClick={addSquaresHandler}>
          Add
        </button>
        <button type="button" onClick={undoSquaresHandler}>
          Undo
        </button>
        <button type="button" onClick={resetSquaresHandler}>
          Reset
        </button>
      </div>
      <div className="square-list">
        {[...Array(squares.allSquares.reduce((total, curr) => total + curr, 0))]
          .fill()
          .map((_, i) => (
            <div className="square" key={i}>
              {i}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Undo;
