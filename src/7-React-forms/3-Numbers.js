import React, { useState } from 'react';

function Numbers() {
  const [number, setNumber] = useState({
    numberOne: 100,
    numberTwo: 50,
  });

  const handleChange = (e) => {
    const value = +e.target.value;

    if (e.target.name === 'numberOne') {
      setNumber({
        numberOne: value,
        numberTwo: value / 2,
      });
    } else {
      setNumber({
        numberOne: value * 2,
        numberTwo: value,
      });
    }
  };

  return (
    <div>
      <div className="cat-form">
        <div>
          <label htmlFor="numberOne">Number 1: </label>
          <input
            type="text"
            id="numberOne"
            name="numberOne"
            value={number.numberOne}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="numberTwo">Number 2: </label>
          <input
            type="text"
            id="numberTwo"
            name="numberTwo"
            value={number.numberTwo}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Numbers;
