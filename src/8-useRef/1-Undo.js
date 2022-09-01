import React, { useState, useEffect, useRef } from 'react';
import rand from '../utils/rand';

function Undo() {
  const [randomSquare, setRandomSquare] = useState(rand(5, 10));
  const [totalSquares, setTotalSquares] = useState(0);
  const [squares, setSquares] = useState([]);
  const [addCount, setAddCount] = useState(0);

  const addSquaresHandler = () => {
    setRandomSquare(rand(5, 10));
    setSquares((prevState) => [...prevState, randomSquare]);
    setTotalSquares((prevState) => prevState + randomSquare);
  };

  const undoSquaresHandler = () => {
    setAddCount((prevState) => prevState - 1);
    const newSquares = [...squares];
    newSquares.splice(squares.length - 1, 1);
    setSquares(newSquares);
    console.log(newSquares);
  };

  const resetSquaresHandler = () => {
    setTotalSquares(0);
    setSquares([]);
    setAddCount(0);
  };

  // useEffect(() => {
  //   if (squares === null) {
  //     const squareList = localStorage.getItem('squareList');
  //     squareList === null ? setSquares(0) : setSquares(JSON.parse(squareList));
  //   } else {
  //     localStorage.setItem('squareList', JSON.stringify(squares));
  //   }
  // }, [squares]);

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
        {[...Array(totalSquares)].fill().map((_, i) => (
          <div className="square" key={i}>
            {i}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Undo;
