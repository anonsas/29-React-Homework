import React, { useState, useEffect } from 'react';
import rand from '../utils/rand';

function UndoMemory() {
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

  const selectStep = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
  };

  useEffect(() => {
    if (squares === null) {
      const squareList = localStorage.getItem('squareList');
      squareList === null
        ? setSquares({
            square: rand(5, 10),
            allSquares: [],
            steps: 0,
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
        {squares?.allSquares.length ? (
          <select name="steps" onChange={selectStep}>
            {[
              ...Array(squares.allSquares.length)
                .fill()
                .map((_, i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                )),
            ]}
          </select>
        ) : null}
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

export default UndoMemory;
