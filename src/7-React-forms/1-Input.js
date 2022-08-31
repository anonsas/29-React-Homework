import React, { useState } from 'react';
import rand from '../utils/rand';

function Input() {
  const [number, setNumber] = useState('');
  const [squares, setSquares] = useState('');

  const handleSubmit = () => {
    setSquares((prevState) => Number(prevState) + number);
    setNumber('');
  };

  return (
    <div>
      <input type="text" value={number} onChange={(e) => setNumber(+e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>

      <div className="square-list">
        {squares && [
          ...Array(squares)
            .fill()
            .map((_, i) => (
              <div className="square" key={i}>
                <p>{rand(100, 200)}</p>
              </div>
            )),
        ]}
      </div>
    </div>
  );
}

export default Input;
