import React, { useState } from 'react';
import rand from '../helpers/rand';

function Change() {
  const [number, setNumber] = useState(0);
  const [figure, setFigure] = useState('circle');

  const changeFigure = () => {
    setFigure((prevState) => (prevState === 'circle' ? 'square' : 'circle'));
  };

  const changeNumber = () => setNumber(rand(5, 25));

  return (
    <div className="figure-container">
      <div className={`figure ${figure}`}>{number}</div>
      <button onClick={changeFigure}>Change figure</button>
      <button onClick={changeNumber}>Change number</button>
    </div>
  );
}

export default Change;
