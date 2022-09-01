import React, { useState } from 'react';

function Range() {
  const [input, setInput] = useState({
    range: 100,
    color: '#000000',
  });

  const [squares, setSquares] = useState([]);

  const handleChange = (e) => {
    setInput((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const createSquare = () => {
    setInput({
      range: 100,
      color: '#000000',
    });
  };

  const saveSquare = () => {
    setSquares((prevState) => [...prevState, input]);
    setInput({
      range: 100,
      color: '#000000',
    });
  };

  return (
    <div>
      <div className="cat-form">
        <p>Square control:</p>

        <div>
          <label htmlFor="range">Select Range </label>
          <input
            type="range"
            id="range"
            name="range"
            min="10"
            max="200"
            value={input.range}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="color">Select Color </label>
          <input
            type="color"
            id="color"
            name="color"
            value={input.color}
            onChange={handleChange}
          />
        </div>

        <button type="button" onClick={createSquare}>
          Create
        </button>
        <button type="button" onClick={saveSquare}>
          Save
        </button>
      </div>

      <div
        className="square-black-input"
        style={{
          height: `${input.range}px`,
          width: `${input.range}px`,
          backgroundColor: input.color,
        }}
      ></div>

      <div className="square-list">
        {squares?.map((square, i) => (
          <div
            key={i}
            className="square-black"
            style={{
              height: `${square.range}px`,
              width: `${square.range}px`,
              backgroundColor: square.color,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Range;
