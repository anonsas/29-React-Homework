import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Black() {
  const [squareList, setSquareList] = useState([]);

  const addToSquareList = () => {
    setSquareList((prevState) => [...prevState, { id: uuidv4(), value: 0 }]);
  };

  const updateSquareValue = (squareId) => {
    setSquareList((prevState) => {
      return prevState.map((square) => {
        if (square.id === squareId) {
          return { ...square, value: square.value + 1 };
        }
        return square;
      });
    });
  };

  return (
    <div>
      <button onClick={addToSquareList}>Prideti</button>
      <div className="black-squares-list">
        {squareList.map((square) => (
          <div key={square.id} className="black-square">
            <button onClick={() => updateSquareValue(square.id)}>+</button>
            <p>{square.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Black;
