import React, { useState, useEffect } from 'react';
import rand from '../utils/rand';

function UndoMemory() {
  const [squares, setSquares] = useState(null);

  const addSquaresHandler = () => {
    setSquares((prevState) => ({
      square: rand(5, 10),
      allSquares: [...prevState.allSquares, prevState.square],
      step: prevState.step + 1,
    }));
  };

  const undoSquaresHandler = () => {
    let newSquares = { ...squares };
    newSquares.allSquares.splice(newSquares.allSquares.length - 1, 1);
    if (newSquares.step > 0) {
      newSquares.step = newSquares.step - 1;
    } else {
      newSquares.step = 0;
    }

    setSquares(newSquares);
  };

  const resetSquaresHandler = () => {
    localStorage.removeItem('squareList');
    setSquares(null);
  };

  const selectStep = (e) => {
    const selectedStep = e.target.value;

    setSquares((prevState) => ({
      ...prevState,
      step: selectedStep,
    }));
  };

  useEffect(() => {
    if (squares === null) {
      const squareList = localStorage.getItem('squareList');
      squareList === null
        ? setSquares({
            square: rand(5, 10),
            allSquares: [],
            step: 0,
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
            {[...Array(squares.allSquares.length)].map((_, i) => (
              <option key={i} value={i + 1} selected={squares.allSquares.length}>
                {i + 1} step
              </option>
            ))}
          </select>
        ) : null}
      </div>
      <div className="square-list">
        {squares &&
          [
            ...Array(
              squares.allSquares
                .filter((_, i) => i < squares.step)
                .reduce((total, curr) => total + curr, 0)
            ),
          ].map((_, i) => (
            <div className="square" key={i}>
              {i + 1}
            </div>
          ))}
      </div>
    </div>
  );
}

export default UndoMemory;
