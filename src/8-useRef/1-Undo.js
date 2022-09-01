import React, { useState, useEffect } from 'react';
import rand from '../utils/rand';

function Undo() {
  const [squares, setSquares] = useState(null);

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
    localStorage.removeItem('squareList');
    setSquares(null);
  };

  useEffect(() => {
    if (squares === null) {
      const squareList = localStorage.getItem('squareList');
      squareList === null
        ? setSquares({
            square: rand(5, 10),
            allSquares: [],
          })
        : setSquares(JSON.parse(squareList));
    } else {
      localStorage.setItem('squareList', JSON.stringify(squares));
    }
  }, [squares]);

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
        {squares &&
          [...Array(squares.allSquares.reduce((total, curr) => total + curr, 0))]
            .fill()
            .map((_, i) => (
              <div className="square" key={i}>
                {i + 1}
              </div>
            ))}
      </div>
    </div>
  );
}

export default Undo;
